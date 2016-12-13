const exec = require('./exec');

exec(`npm run copy-utils`);
exec(`npm run gen-changelog`);
exec(`git add CHANGELOG.md`);
