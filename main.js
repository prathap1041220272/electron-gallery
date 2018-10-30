'use strict';

const { app, BrowserWindow } = require('electron');


var mainWindow = null;

app.on('window-all-closed', function() {
	if (process.platform != 'darwin') {
		app.quit();
	}
});

app.on('ready', function() {
	mainWindow = new BrowserWindow({
		width: 500,
		height: 500
	});
	mainWindow.loadURL('file://' + __dirname + '/index.html');
	// mainWindow.loadFile('/index.html');
	mainWindow.on('closed', function() {
		mainWindow = null;
	});
});
