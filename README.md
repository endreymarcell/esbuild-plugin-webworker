# esbuild-plugin-webworker

This is a naive attempt at writing a web worker plugin for esbuild, replicating the functionality of Webpack's [worker-loader](https://webpack.js.org/loaders/worker-loader/).
For context, see https://github.com/evanw/esbuild/issues/312  

__Disclaimer:__ this is just my personal attempt at solving this problem. I needed it to be able to use esbuild on a codebase that was written with Webpack in mind.  

## Usage

Before:
```javascript
const worker = new Worker('./worker.js');
worker.postMessage('something');
```

After:
```javascript
const CustomWorkerClass = require('./worker.js').default;
const worker = new CustomWorkerClass();
worker.postMessage('something');
```

## Example
There is a working example included so that you can see how the plugin exactly works. To run it:
```bash
yarn  # install esbuild
yarn bundle  # bundle the code using esbuild
python3 -m http.server --directory example  # or any other way of serving the files
open http://localhost:8000/  # or any other way to open localhost:8000 in a browser
```
