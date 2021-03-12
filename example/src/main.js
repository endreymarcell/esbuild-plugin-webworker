const CustomWorkerClass = require('./worker.js').default;

const worker = new CustomWorkerClass();
worker.postMessage('world');
worker.onmessage = message => document.getElementById('placeholder').innerText = message.data;
