const fs = require('fs-extra');

const re = new RegExp(/(node_modules)(\S)*(node_modules)/g);
const reTestRes = re.exec(__dirname);

if (!reTestRes) {
  try {
    fs.copySync(__dirname, './npm_scripts')
  } catch (err) {
    console.error(err)
  }
}
