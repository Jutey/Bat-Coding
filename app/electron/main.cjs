const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const fs = require('fs');
const { spawn } = require('child_process');

const isDev = process.env.NODE_ENV === 'development' || !app.isPackaged;
const progressFile = path.join(app.getPath('userData'), 'progress.json');

function readProgress() {
  try { return JSON.parse(fs.readFileSync(progressFile, 'utf8')); }
  catch { return {}; }
}

function writeProgress(data) {
  fs.writeFileSync(progressFile, JSON.stringify(data, null, 2));
}

function curriculumRoot() {
  if (isDev) return path.join(__dirname, '..', '..', 'worlds');
  return path.join(process.resourcesPath, 'worlds');
}

function createWindow() {
  const win = new BrowserWindow({
    width: 1440, height: 900, minWidth: 1100, minHeight: 700,
    backgroundColor: '#0d0d0d',
    titleBarStyle: 'hidden',
    frame: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.cjs'),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });
  if (isDev) win.loadURL('http://localhost:5173');
  else win.loadFile(path.join(__dirname, '..', 'dist', 'index.html'));
}

app.whenReady().then(createWindow);
app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit(); });
app.on('activate', () => { if (BrowserWindow.getAllWindows().length === 0) createWindow(); });

// ── IPC ──────────────────────────────────────────────────────────

ipcMain.handle('get-progress', () => readProgress());
ipcMain.handle('save-progress', (_, data) => { writeProgress(data); return true; });

ipcMain.handle('get-worlds', () => {
  const root = curriculumRoot();
  try {
    return fs.readdirSync(root).filter(d => d.startsWith('world-')).sort().map(dir => {
      const readmePath = path.join(root, dir, 'README.md');
      const readme = fs.existsSync(readmePath) ? fs.readFileSync(readmePath, 'utf8') : '';
      const firstLine = readme.split('\n')[0].replace(/^#\s*/, '');
      return { id: dir, name: firstLine, path: path.join(root, dir) };
    });
  } catch { return []; }
});

ipcMain.handle('get-lessons', (_, worldId) => {
  const root = path.join(curriculumRoot(), worldId);
  try {
    const dirs = fs.readdirSync(root)
      .filter(d => d.startsWith('lesson-') || d.includes('boss') || d.includes('project'))
      .sort();
    return dirs.map(dir => {
      const lessonPath = path.join(root, dir);
      const mdPath = path.join(lessonPath, 'lesson.md');
      const content = fs.existsSync(mdPath) ? fs.readFileSync(mdPath, 'utf8') : '';
      const firstLine = content.split('\n')[0].replace(/^#\s*/, '');
      return {
        id: dir, worldId,
        name: firstLine || dir,
        isBoss: dir.includes('boss') || dir.includes('project'),
        hasStarter: fs.existsSync(path.join(lessonPath, 'starter.bat')),
        hasChallenge: fs.existsSync(path.join(lessonPath, 'challenge.bat')),
        hasSolution: fs.existsSync(path.join(lessonPath, 'solution.bat')),
        path: lessonPath,
      };
    });
  } catch { return []; }
});

ipcMain.handle('read-lesson', (_, p) => {
  try { return fs.readFileSync(path.join(p, 'lesson.md'), 'utf8'); }
  catch { return '# Lesson\n\nComing soon.'; }
});

ipcMain.handle('read-bat', (_, p, filename) => {
  try { return fs.readFileSync(path.join(p, filename), 'utf8'); }
  catch { return '@echo off\necho Hello\npause\n'; }
});

ipcMain.handle('run-bat', (_, code) => {
  return new Promise((resolve) => {
    // Safety blocklist
    const BLOCKED = [
      'format', 'shutdown', 'reg ', 'regedit', 'taskkill', 'powershell',
      'diskpart', 'cipher', 'takeown', 'icacls', 'bcdedit', 'wmic', 'net user',
    ];
    const lower = (code || '').toLowerCase();
    for (const cmd of BLOCKED) {
      const pattern = new RegExp('(^|\\s|&|\\|)' + cmd.trim().replace(/\s+/, '\\s+') + '(\\s|$|&|\\||/)', 'm');
      if (pattern.test(lower)) {
        resolve({ output: '[BLOCKED] This command is restricted in CommandQuest for safety.', error: null, exitCode: -1, debug: {} });
        return;
      }
    }

    if (process.platform !== 'win32') {
      resolve({ output: '[Windows only]\n\nScript execution requires Windows.\nRead your code and predict the output manually.', error: null, exitCode: 0, debug: {} });
      return;
    }

    // Create unique temp file
    const tmpFile = path.join(
      app.getPath('temp'),
      `cq_${Date.now()}_${Math.random().toString(36).slice(2, 8)}.bat`
    );
    const debug = { tmpFile, existsBeforeRun: false, spawnArgs: [], cwd: '', exitCode: null, cleanupOk: null };

    // Write temp file
    try {
      fs.writeFileSync(tmpFile, code, 'utf8');
    } catch (e) {
      resolve({ output: '', error: `Failed to write script: ${e.message}`, exitCode: -1, debug });
      return;
    }

    debug.existsBeforeRun = fs.existsSync(tmpFile);
    if (!debug.existsBeforeRun) {
      resolve({ output: '', error: 'Script file could not be created.', exitCode: -1, debug });
      return;
    }

    const cwd = app.getPath('documents');
    // Pass tmpFile as a separate argument — Node.js will quote it if it contains spaces
    const spawnArgs = ['/d', '/c', tmpFile];
    debug.spawnArgs = spawnArgs;
    debug.cwd = cwd;

    const cp = spawn('cmd.exe', spawnArgs, {
      windowsHide: true,
      shell: false,
      cwd,
      stdio: ['pipe', 'pipe', 'pipe'],
    });

    // Close stdin immediately so `pause` and `set /p` don't block forever
    try { cp.stdin.end(); } catch {}

    let out = '', err = '';
    cp.stdout.on('data', d => { out += d.toString(); });
    cp.stderr.on('data', d => { err += d.toString(); });

    let settled = false;
    let timeoutId;

    function settle(result) {
      if (settled) return;
      settled = true;
      clearTimeout(timeoutId);
      try { fs.unlinkSync(tmpFile); debug.cleanupOk = true; } catch { debug.cleanupOk = false; }
      resolve({ ...result, debug });
    }

    cp.on('close', (code) => {
      debug.exitCode = code;
      settle({ output: out, error: err || null, exitCode: code });
    });

    cp.on('error', (e) => {
      settle({ output: out, error: `Launch failed: ${e.message}`, exitCode: -1 });
    });

    // 10 second timeout — kill process, let close event do final settle
    timeoutId = setTimeout(() => {
      try { cp.kill(); } catch {}
      // settle here in case close never fires
      settle({ output: out || 'Script timed out after 10 seconds.', error: err || 'Timeout', exitCode: -1 });
    }, 10000);
  });
});

ipcMain.handle('window-minimize', (e) => BrowserWindow.fromWebContents(e.sender)?.minimize());
ipcMain.handle('window-maximize', (e) => {
  const w = BrowserWindow.fromWebContents(e.sender);
  w?.isMaximized() ? w.unmaximize() : w?.maximize();
});
ipcMain.handle('window-close', (e) => BrowserWindow.fromWebContents(e.sender)?.close());
