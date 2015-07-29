var connect = require('connect');
var serveStatic = require('serve-static');
console.log("Server started");
connect().use(serveStatic(__dirname)).listen(8000);