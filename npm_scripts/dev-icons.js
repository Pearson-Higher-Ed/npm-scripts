const path = require('path');
const fs = require('fs-extra');

try {
  fs.copySync(path.join(__dirname, '..', 'node_modules/pearson-elements/dist/icons'), path.join(__dirname, '..', 'icons'));
} catch (err) {
  console.error(err)
}
