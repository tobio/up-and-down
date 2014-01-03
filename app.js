var express = require('express');
var app = express();
var raven = require('raven');

app.engine('jade', require('jade').__express);

app.set('view engine', 'jade');

app.use(express.logger());
app.use('/static', express.static('public'));

app.get('/', function(req, res) {
    res.render('master');
});

app.use(raven.middleware.express('https://434506410ac44af5a6aa759c5f48b808:17f3395a93c04b8abf765582675333ad@app.getsentry.com/5752'));

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});