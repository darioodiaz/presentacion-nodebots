var connect = require('connect');
var serveStatic = require('serve-static');
console.log("Server started 9000");
connect().use(serveStatic(__dirname)).listen(9000);