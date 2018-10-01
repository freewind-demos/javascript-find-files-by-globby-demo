const globby = require('globby');

const files = globby.sync(['*.(js|json)', './node_modules/**/*.js', '!.*']);
console.log(files);
