const fs   = require('fs');
const exec = require('./exec');


const pathIndex = __dirname.indexOf('/node_modules/');
const path      = __dirname.slice(0, pathIndex);


const file      = fs.readFileSync(`${path}/.gitignore`, 'utf8');
let updatedFile = file.replace('/build', '#/build');
fs.writeFileSync(`${path}/.gitignore`, updatedFile, 'utf8');

try {
	  exec('git add .');
	    exec('git commit -am "chore: gh-pages comment out build"');
	      exec('git subtree push --prefix build origin gh-pages');
} catch (err) {
	  console.log("error commiting to gh-pages... skipping");
}

updatedFile = file.replace('#/build', '/build');
fs.writeFileSync(`${path}/.gitignore`, updatedFile, 'utf8');

try {
	  exec('git add .');
	    exec('git commit -am "chore: gh-pages uncomment build"');
} catch (err) {
	  console.log("error commiting to gh-pages... skipping");
}

