'use strict';

angular.module('services.Remoting')
  .service('GroupsService', function($q, $http, CoursesService) {
    var test = typeof(Visualforce) === 'undefined',
        groups = [],
        ended = false;

    // Constant
    function Group(params) {
      this.id = params.id,
      this.name = params.name,
      this.description = params.description,
      this.location = params.location;
      this.courseIds = params.course_ids || [];

      this.samples = [];

      if (!ended) {
      var num = Math.ceil(Math.random()*10 + 10);
      $http({ method: 'GET', url: 'http://api.randomuser.me/?results=' + num })
        .success(function(data, status, headers, config) {
          this.samples = data.results.map(function(raw) {
            return {
              name: raw.user.name,
              fullName: raw.user.name.first + ' ' + raw.user.name.last,
              gender: raw.user.gender,
              profileImageUrl: raw.user.picture
            };
          });
        }.bind(this));
      }
    }
    Group.prototype.courses = function() {
      return this.courseIds.map(function(courseId) {
        return CoursesService.find(courseId);
      }).filter(function(a) { return a; });
    };
    Group.prototype.members = function() {
      return this.samples;
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
      name: 'Software Engineering Group',
      description: 'A long description',
      location: 'New York',
      course_ids: [26, 1347, 9, 128, 27, 127, 688]
    });
    this.create({
      name: 'Songwriting Club',
      description: 'A long description',
      location: 'Berkeley',
      course_ids: [1119, 1811]
    });
    this.create({
      name: 'Asian Cuisine',
      description: 'A long description',
      location: 'Washington',
      course_ids: [14, 480, 1322]
    });
    this.create({
      name: 'Spirituality and Meditation',
      description: 'A long description',
      location: 'New Orleans',
      course_ids: [14, 480, 1322]
    });
    this.create({
      name: 'Data Engineers',
      description: 'A long description',
      location: 'Washington',
      course_ids: [14, 480, 1322]
    });

    ended = true;

    return this;
  });
