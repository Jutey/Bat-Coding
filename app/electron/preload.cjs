const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
  getProgress: () => ipcRenderer.invoke('get-progress'),
  saveProgress: (data) => ipcRenderer.invoke('save-progress', data),
  getWorlds: () => ipcRenderer.invoke('get-worlds'),
  getLessons: (worldId) => ipcRenderer.invoke('get-lessons', worldId),
  readLesson: (p) => ipcRenderer.invoke('read-lesson', p),
  readBat: (p, f) => ipcRenderer.invoke('read-bat', p, f),
  runBat: (code) => ipcRenderer.invoke('run-bat', code),
  windowMinimize: () => ipcRenderer.invoke('window-minimize'),
  windowMaximize: () => ipcRenderer.invoke('window-maximize'),
  windowClose: () => ipcRenderer.invoke('window-close'),
});
