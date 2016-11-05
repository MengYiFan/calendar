var calendar = require('../module/calendar');
var http = require('http');

http.createServer(function (request, response) {
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.end(calendar(2016));
}).listen(8888);

// 终端打印如下信息
console.log(calendar(2016));