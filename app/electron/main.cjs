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
    // Safety blocklist — reject dangerous commands
    const BLOCKED = [
      'del', 'erase', 'rd', 'rmdir', 'format', 'shutdown', 'reg', 'regedit',
      'taskkill', 'powershell', 'diskpart', 'cipher', 'takeown', 'icacls',
      'bcdedit', 'wmic', 'net user',
    ];
    const lower = code.toLowerCase();
    for (const cmd of BLOCKED) {
      // Match whole word / command token to avoid false positives
      const pattern = new RegExp('(^|\\s|&|\\|)' + cmd.replace(' ', '\\s+') + '(\\s|$|&|\\||/)', 'm');
      if (pattern.test(lower)) {
        resolve({ output: '[BLOCKED] This command is restricted in CommandQuest for safety.', error: null });
        return;
      }
    }

    if (process.platform !== 'win32') {
      resolve({ output: '[Windows only]\n\nOn Windows, this opens a real cmd.exe window.\nFor now: read your code and predict the output.', error: null });
      return;
    }
    const tmpFile = path.join(app.getPath('temp'), `bat_${Date.now()}.bat`);
    fs.writeFileSync(tmpFile, code);
    spawn('cmd.exe', ['/c', 'start', 'cmd.exe', '/k', tmpFile], { detached: true, stdio: 'ignore' }).unref();
    const cap = spawn('cmd.exe', ['/c', tmpFile], { shell: true });
    let out = '', err = '';
    cap.stdout.on('data', d => { out += d; });
    cap.stderr.on('data', d => { err += d; });
    cap.on('close', () => { try { fs.unlinkSync(tmpFile); } catch {} resolve({ output: out, error: err || null }); });
    setTimeout(() => { cap.kill(); try { fs.unlinkSync(tmpFile); } catch {} resolve({ output: out || 'Execution stopped. This script appears to loop forever.', error: null }); }, 5000);
  });
});

ipcMain.handle('window-minimize', (e) => BrowserWindow.fromWebContents(e.sender)?.minimize());
ipcMain.handle('window-maximize', (e) => {
  const w = BrowserWindow.fromWebContents(e.sender);
  w?.isMaximized() ? w.unmaximize() : w?.maximize();
});
ipcMain.handle('window-close', (e) => BrowserWindow.fromWebContents(e.sender)?.close());
