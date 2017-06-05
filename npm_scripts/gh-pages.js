const fs   = require('fs');
const os   = require('os');
const exec = require('./exec');


// try to create a gh-pages branch...
try {
  exec('git checkout -b gh-pages');
}catch (err){
  console.log("error creating gh-pages branch... skipping");
}


// try to checkout existing gh-pages branch...
try {
  exec('git checkout gh-pages');
}catch (err){
  console.log("error checking out gh-pages branch... skipping");
}


try {
 // Build it...
 exec('npm run build');

 // Run tests...
 exec('npm run test');

 // Find project root...
 const pathIndex = __dirname.indexOf('/node_modules/');
 const path      = __dirname.slice(0, pathIndex);

 // copy coverage dir...
 if(os.type() === 'Linux' || os.type() == 'Darwin'){
   exec(`cp -R ${path}/coverage ${path}/build`);
 }

 if(os.type() === 'Windows_NT'){
   exec(`robocopy ${path}/coverage ${path}/build /mir`)
 }

 // update .gitignore and push...
 const file      = fs.readFileSync(`${path}/.gitignore`, 'utf8');
 let updatedFile = file.replace('/build', '#/build');
 fs.writeFileSync(`${path}/.gitignore`, updatedFile, 'utf8');

 exec('git add build');
 exec('git commit -am "chore: gh-pages comment out build"');
 exec('git subtree push --prefix build origin gh-pages');

} catch (err) {
   console.log("error commiting to gh-pages... skipping");
}
