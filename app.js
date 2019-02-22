var express = require('express');
var app = express();

var PORT = process.env.PORT;

if (!PORT) {
	PORT = 3000;
}

app.use('/', express.static(__dirname + '/static'));

app.listen(PORT, function () {
	console.log('app listening on port ' + PORT);
});