const fs = require('fs-extra');

try {
  fs.copySync(__dirname + '/../node_modules/@pearson-components/npm-scripts/npm_scripts',
  './npm_scripts')
  console.log('success');
} catch (err) {
  console.error(err)
}
