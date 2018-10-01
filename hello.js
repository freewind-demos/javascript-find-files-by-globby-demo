const globby = require('globby');

const files = globby.sync(['*.js', './node_modules/**/*.js', '!.*']);
console.log(files);
