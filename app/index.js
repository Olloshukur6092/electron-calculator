const { app, BrowserWindow } = require("electron");

function createWindow() {
  let mainWindow = new BrowserWindow({
    width: 400,
    height: 460,
    webPreferences: {
      nodeIntegration: true,
    },
  });
  mainWindow.loadFile("./app/index.html");
  mainWindow.setMenuBarVisibility(false);
  mainWindow.setResizable(false);
}

app.whenReady().then(createWindow);
