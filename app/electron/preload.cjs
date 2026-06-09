const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
  getWorlds: () => ipcRenderer.invoke('get-worlds'),
  getLessons: (worldId) => ipcRenderer.invoke('get-lessons', worldId),
  readLesson: (lessonPath) => ipcRenderer.invoke('read-lesson', lessonPath),
  readBat: (lessonPath, filename) => ipcRenderer.invoke('read-bat', lessonPath, filename),
  runBat: (code) => ipcRenderer.invoke('run-bat', code),
  getProgress: () => ipcRenderer.invoke('get-progress'),
  completeLesson: (lessonId) => ipcRenderer.invoke('complete-lesson', lessonId),
  unlockAchievement: (id) => ipcRenderer.invoke('unlock-achievement', id),
  addLines: (count) => ipcRenderer.invoke('add-lines', count),
  windowMinimize: () => ipcRenderer.invoke('window-minimize'),
  windowMaximize: () => ipcRenderer.invoke('window-maximize'),
  windowClose: () => ipcRenderer.invoke('window-close'),
});
