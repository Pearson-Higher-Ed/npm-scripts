const exec = require('./exec');

exec(`npm run copy-utils`);
exec(`npm test`);
exec(`npm run build`);
