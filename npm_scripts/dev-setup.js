const path = require('path');
const exec = require('./exec');
const fs = require('fs-extra');

exec(`mkdir -p fonts`);

try {
  fs.copySync(path.join(__dirname, '..', 'node_modules/pearson-elements/dist/fonts'), path.join(__dirname, '..', 'fonts'));
} catch (err) {
  console.error(err)
}

try {
  fs.copy(path.join(__dirname, '..', 'node_modules/pearson-elements/dist/css/elements.css'), path.join(__dirname, '..', 'demo'));
} catch (err) {
  console.error(err)
}

