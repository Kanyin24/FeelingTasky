const { app, BrowserWindow } = require('electron');
const fs = require('fs');

function createWindow() {
  const win = new BrowserWindow({
    width: 1920,
    height: 1080,

  });

  win.loadFile('./views/index.html');
}


app.whenReady().then(createWindow); 


