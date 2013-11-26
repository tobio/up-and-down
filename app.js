var express = require('express');
var app = express();

app.engine('jade', require('jade').__express);

app.set('view engine', 'jade');

app.use(express.logger());
app.use('/static', express.static('public'));

app.get('/', function(req, res) {
    res.render('master');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});