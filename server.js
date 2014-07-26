'use strict';

var fs = require('fs'),
    express = require('express'),
    app = express();

app.set('title', 'Salesforce Summer of Hacks (Local Test Environment)');
app.use('/', express.static(__dirname));

app.listen(3000);
