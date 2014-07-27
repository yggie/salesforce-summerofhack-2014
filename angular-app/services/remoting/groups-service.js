'use strict';

angular.module('services.Remoting')
  .service('GroupsService', function($q) {
    var test = typeof(Visualforce) === 'undefined',
        groups = [];

    // Constant
    function Group(params) {
      this.id = params.id,
      this.name = params.name,
      this.description = params.description,
      this.location = params.location;
    }
    Group.prototype.courses = function() {
      return [];
    };
    Group.prototype.members = function() {
      return [];
    };
    Group.prototype.nextSession = function() {
      return null;
    };
    Group.prototype.banner = function() {
      return 'https://d1z850dzhxs7de.cloudfront.net/topics/datasci/small-icon.hover.png';
    };
    Group.prototype.progress = function() {
      return 60;
    };

    // Action
    this.create = function(group) {
      var deferred = $q.defer();
      group.id = genId();
      groups.push(new Group(group));
      deferred.resolve(groups[groups.length - 1]);
      console.log(groups[groups.length - 1]);
      return deferred.promise;
    }.bind(this);

    // Action
    this.find = function(id) {
      var deferred = $q.defer(),
          hit = groups.filter(function(group) {
            return group.id === id;
          })[0];
      if (hit) {
        deferred.resolve(hit);
      } else {
        deferred.reject('Could not find group with id=' + id);
      }
      return deferred.promise;
    }.bind(this);

    // Action
    this.all = function() {
      var deferred = $q.defer();
      deferred.resolve(groups.slice(0));
      return deferred.promise;
    }.bind(this);

    // Helper
    var counter = 1;
    function genId() {
      return counter++;
    }

    this.create({
      name: 'The Hardware/Software Interface',
      description: 'A long description',
      location: 'Washington'
    });
    this.create({
      name: 'Songwriting',
      description: 'A long description',
      location: 'Berkeley'
    });
    this.create({
      name: 'Data Science',
      description: 'A long description',
      location: 'Washington'
    });

    return this;
  });
