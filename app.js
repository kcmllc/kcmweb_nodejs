// set up ========================
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var routes = require('./server/views/index');
app.set('views', './public/templates');
app.set('view engine', 'jade');

app.use(bodyParser());
app.use(express.static(__dirname + '/public'));
app.use('/', routes);

// listen (start app with node server.js) ======================================
app.listen(3002);

