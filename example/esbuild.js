const esbuild = require('esbuild');
const { webWorkerPlugin } = require('../plugin.js');

esbuild.build({
  // adjust these paths to match your folder structure
  entryPoints: ['example/src/main.js'],
  outfile: 'example/bundle/main.js',
  bundle: true,
  sourcemap: true,
  plugins: [webWorkerPlugin],
})
