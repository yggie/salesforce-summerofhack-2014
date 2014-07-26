var fs = require('fs'),
    http = require('http');

function getSamplesIfNotExists(name, path) {
  var filename = 'angular-app/services/coursera/samples/' + name + '.js';
    http.request({
      host: 'api.coursera.org',
      path: path,
      method: 'GET'
    }, function(response) {
      var str = '';
      response.on('data', function(chunk) {
        str += chunk;
      });

      response.on('end', function() {
        var output = '' +
        "angular.module('services.Coursera')\n" +
          ".service('Sample" + name + "Service', function() {\n" +
            'this.payload = ' + str.toString('utf-8') + ";\n" +
          '});'
        fs.writeFile(filename, output, function(err) {
          if (err) {
            console.log(err);
          } else {
            console.log(filename + ' was successfully created');
          }
        });
      });
    }).end();
}

getSamplesIfNotExists('Courses',
  '/api/catalog.v1/courses?fields=id,name,shortDescription,photo,largeIcon,smallIcon,universityLogo,instructor,targetAudience&includes=categories,sessions,universities');

getSamplesIfNotExists('Categories',
  '/api/catalog.v1/categories?fields=name,id,description');

getSamplesIfNotExists('Universities',
  '/api/catalog.v1/universities?fields=id,name,description,location,classLogo,website');
