const { app, BrowserWindow, ipcMain, shell } = require('electron');
const path = require('path');
const fs = require('fs');
const { execFile, spawn } = require('child_process');

const isDev = process.env.NODE_ENV === 'development' || !app.isPackaged;

// Progress store (simple JSON file next to app)
const progressFile = path.join(app.getPath('userData'), 'progress.json');

function readProgress() {
  try {
    return JSON.parse(fs.readFileSync(progressFile, 'utf8'));
  } catch {
    return { completedLessons: [], achievements: [], totalLinesWritten: 0 };
  }
}

function writeProgress(data) {
  fs.writeFileSync(progressFile, JSON.stringify(data, null, 2));
}

// Curriculum root — next to app in dev, in resources in prod
function curriculumRoot() {
  if (isDev) return path.join(__dirname, '..', '..', 'worlds');
  return path.join(process.resourcesPath, 'worlds');
}

function createWindow() {
  const win = new BrowserWindow({
    width: 1400,
    height: 900,
    minWidth: 1100,
    minHeight: 700,
    backgroundColor: '#0d0d0d',
    titleBarStyle: 'hiddenInset',
    frame: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.cjs'),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  if (isDev) {
    win.loadURL('http://localhost:5173');
  } else {
    win.loadFile(path.join(__dirname, '..', 'dist', 'index.html'));
  }
}

app.whenReady().then(createWindow);
app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit(); });
app.on('activate', () => { if (BrowserWindow.getAllWindows().length === 0) createWindow(); });

// ── IPC Handlers ────────────────────────────────────────────────

// Get world list
ipcMain.handle('get-worlds', () => {
  const root = curriculumRoot();
  try {
    const dirs = fs.readdirSync(root)
      .filter(d => d.startsWith('world-'))
      .sort();
    return dirs.map(dir => {
      const readmePath = path.join(root, dir, 'README.md');
      const readme = fs.existsSync(readmePath) ? fs.readFileSync(readmePath, 'utf8') : '';
      const firstLine = readme.split('\n')[0].replace(/^#\s*/, '');
      return { id: dir, name: firstLine, path: path.join(root, dir) };
    });
  } catch (e) {
    return [];
  }
});

// Get lessons for a world
ipcMain.handle('get-lessons', (_, worldId) => {
  const root = path.join(curriculumRoot(), worldId);
  try {
    const dirs = fs.readdirSync(root)
      .filter(d => d.startsWith('lesson-') || d.includes('boss-battle') || d.includes('project-'))
      .sort();
    return dirs.map(dir => {
      const lessonPath = path.join(root, dir, 'lesson.md');
      const content = fs.existsSync(lessonPath) ? fs.readFileSync(lessonPath, 'utf8') : '';
      const firstLine = content.split('\n')[0].replace(/^#\s*/, '');
      const isBoss = dir.includes('boss') || dir.includes('project');
      return {
        id: dir,
        worldId,
        name: firstLine || dir,
        isBoss,
        hasStarter: fs.existsSync(path.join(root, dir, 'starter.bat')),
        hasChallenge: fs.existsSync(path.join(root, dir, 'challenge.bat')),
        hasSolution: fs.existsSync(path.join(root, dir, 'solution.bat')),
        path: path.join(root, dir),
      };
    });
  } catch (e) {
    return [];
  }
});

// Read lesson markdown
ipcMain.handle('read-lesson', (_, lessonPath) => {
  const mdPath = path.join(lessonPath, 'lesson.md');
  try { return fs.readFileSync(mdPath, 'utf8'); } catch { return '# Lesson\n\nComing soon.'; }
});

// Read bat file content
ipcMain.handle('read-bat', (_, lessonPath, filename) => {
  const filePath = path.join(lessonPath, filename);
  try { return fs.readFileSync(filePath, 'utf8'); } catch { return '@echo off\necho Hello\npause\n'; }
});

// Run a bat file (Windows only — on other platforms returns a helpful message)
ipcMain.handle('run-bat', (_, code) => {
  return new Promise((resolve) => {
    if (process.platform !== 'win32') {
      resolve({
        output: '[Batch files only run on Windows]\n\nOn Windows, this would open a terminal window and run your code.\n\nFor now, read your code carefully and predict what it would do.',
        error: null,
      });
      return;
    }

    const tmpFile = path.join(app.getPath('temp'), `bat_coding_${Date.now()}.bat`);
    fs.writeFileSync(tmpFile, code);

    // Run in a new cmd window so the student can see it
    const proc = spawn('cmd.exe', ['/c', 'start', 'cmd.exe', '/k', tmpFile], {
      detached: true,
      stdio: 'ignore',
    });
    proc.unref();

    // Also capture output for the in-app terminal panel
    const capture = spawn('cmd.exe', ['/c', tmpFile], { shell: true });
    let out = '';
    let err = '';
    capture.stdout.on('data', d => { out += d.toString(); });
    capture.stderr.on('data', d => { err += d.toString(); });
    capture.on('close', () => {
      try { fs.unlinkSync(tmpFile); } catch {}
      resolve({ output: out, error: err || null });
    });
    setTimeout(() => {
      capture.kill();
      try { fs.unlinkSync(tmpFile); } catch {}
      resolve({ output: out || '(program still running or no output)', error: null });
    }, 10000);
  });
});

// Progress
ipcMain.handle('get-progress', () => readProgress());
ipcMain.handle('complete-lesson', (_, lessonId) => {
  const p = readProgress();
  if (!p.completedLessons.includes(lessonId)) p.completedLessons.push(lessonId);
  writeProgress(p);
  return p;
});
ipcMain.handle('unlock-achievement', (_, achievementId) => {
  const p = readProgress();
  if (!p.achievements.includes(achievementId)) {
    p.achievements.push(achievementId);
    writeProgress(p);
    return { unlocked: true, achievement: achievementId };
  }
  return { unlocked: false };
});
ipcMain.handle('add-lines', (_, count) => {
  const p = readProgress();
  p.totalLinesWritten = (p.totalLinesWritten || 0) + count;
  writeProgress(p);
  return p.totalLinesWritten;
});

// Window controls
ipcMain.handle('window-minimize', (e) => BrowserWindow.fromWebContents(e.sender).minimize());
ipcMain.handle('window-maximize', (e) => {
  const win = BrowserWindow.fromWebContents(e.sender);
  win.isMaximized() ? win.unmaximize() : win.maximize();
});
ipcMain.handle('window-close', (e) => BrowserWindow.fromWebContents(e.sender).close());
