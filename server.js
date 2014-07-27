'use strict';

var fs = require('fs'),
    express = require('express'),
    app = express();

app.engine('.html', require('jade').renderFile);
app.set('title', 'Salesforce Summer of Hacks (Local Test Environment)');
app.use('/assets/', express.static(__dirname + '/assets/'));
app.use('/lib/', express.static(__dirname + '/lib/'));

app.get('/', function(req, res) {
  res.sendfile('views/create-group.html');
});

app.get('/groups/find', function(req, res) {
  res.sendfile('views/find-group.html');
});

app.get('/groups/create', function(req, res) {
  res.sendfile('views/create-group.html');
});

app.listen(3000);
