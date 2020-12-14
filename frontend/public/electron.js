const { app, BrowserWindow } = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');

let appWindow;

function createWindow(){

  // create new window
  appWindow = new BrowserWindow({
    width: 1200,
    height: 650,
    center: true,
    show: false,
    icon: 'icon.png',
    resizable: true // -> hace que no se pueda modificar el tamaño de la ventana
  });

  // get the path
  appWindow.loadURL(
    isDev
      ? 'http://localhost:9000'
      : `file://${path.join(__dirname, "../build/index.html")}`
  )

  // when the aplications is closed
  appWindow.on('closed', () => {
    appWindow = null;
  })

  // when the aplication is ready, show window
  appWindow.once('ready-to-show', () => {
    appWindow.show();
  })
}

app.on('ready', createWindow);

// the boton close is work good
  app.on('window-all-closed', () => {
    if(process.platform !== 'darwin'){
      app.quit();
    }
  });

  // press the icon in the deck in mac work good
  app.on('activate', () => {
    if(appWindow === null) {
      createWindow();
    }
  })
