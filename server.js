var connect = require('connect');
var serveStatic = require('serve-static');
console.log("Server started 8000");
connect().use(serveStatic(__dirname)).listen(8000);