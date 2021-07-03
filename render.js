const { app, BrowserWindow } = require('electron');
const fs = require('fs');

function createWindow() {
  const win = new BrowserWindow({

    width: 960,
    height: 690,
  });

  win.loadFile('./views/index.html');
}
app.whenReady().then(createWindow); 
