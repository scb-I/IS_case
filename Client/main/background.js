import path from 'path';
import { app, ipcMain } from 'electron';
import serve from 'electron-serve';
import { createWindow } from './helpers';

const isProd = process.env.NODE_ENV === 'production';

if (isProd) {
    serve({ directory: 'app' });
} else {
    app.setPath('userData', `${app.getPath('userData')} (development)`);
}

let mainWindow; // Declare a variable to store the mainWindow

(async () => {
    await app.whenReady();

    mainWindow = createWindow('main', {
        width: 1920,
        height: 1080,
        maxWidth: 1920,
        minWidth: 1280,
        maxHeight: 1080,
        minHeight: 720,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
        },
    });

    if (isProd) {
        await mainWindow.loadURL('app://./authPage');
    } else {
        const port = process.argv[2];
        await mainWindow.loadURL(`http://localhost:${port}/authPage`);
        mainWindow.webContents.openDevTools();
    }
})();

app.on('window-all-closed', () => {
    app.quit();
});

ipcMain.on('close-win', () => {
    app.quit();
});

ipcMain.on('minimize-win', () => {
    if (mainWindow) {
        mainWindow.minimize();
    }
});

ipcMain.on('maximize-win', () => {
    if (mainWindow && mainWindow.isMaximized()) {
        mainWindow.restore(); // Restore the window if it is minimized
    } else if (mainWindow) {
        mainWindow.maximize();
    }
});
