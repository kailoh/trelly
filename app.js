var express = require('express'),
fs = require('fs'),
https = require('https'),
path = require('path');

var app = express(),
	env = process.env.NODE_ENV || 'development',
	options = {
	key : fs.readFileSync('key.pem'),
	cert : fs.readFileSync('cert.pem')
};

app.set('view engine', 'jade');

app.get('/', function (req, res)
{
    res.render('index');
});

// var server = app.listen(process.env.PORT || 3000, function () {

//   var host = server.address().address;
//   var port = server.address().port;

//   console.log('App listening at http://%s:%s', host, port);

// });

app.use('/', express.static(path.join(__dirname, 'public')));

if (env == 'development') {
	console.log("Server up in DEV");
	https.createServer(options, app).listen(process.env.PORT || 3000);
}

if (env == 'production') {
	console.log("Server up in PROD. Every git push deploys to heroku automatically. Yay!");
	app.listen(process.env.PORT || 3000);
}