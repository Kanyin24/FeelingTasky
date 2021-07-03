const { app, BrowserWindow, Notification } = require('electron');
// CommonJS modules import here
// app => controls event lifecycle
// BrowserWindow => manages the application window

// const NOTIFICATION_TITLE = 'Crappy notification';
// const NOTIFICATION_BODY = 'Notification from the rendered process. click to log to console.';
// const CLICK_MESSAGE = 'Notification clicked';

function createWindow() {
  const win = new BrowserWindow({
    width: 850,
    height: 650,

  });

  win.loadFile('./views/index.html');
}

// function showNotification() {
//   new Notification(NOTIFICATION_TITLE, { body: NOTIFICATION_BODY })
//     .show()
//   // this should do something maybe
//     .onclick = () => console.log(CLICK_MESSAGE).catch(console.error('error'));
// }

app.whenReady().then(createWindow); // .then(showNotification)

// need logic for quiting the program
// kinda shitty at the moment
