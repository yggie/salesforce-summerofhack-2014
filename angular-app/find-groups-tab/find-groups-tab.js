'use strict';

angular.module('FindGroupsTabApp', ['ngRoute', 'services.Coursera', 'services.Remoting', 'Templates'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'find-groups-tab/views/index.html',
        controller: 'IndexController'
      })
      .when('/groups/:group_id', {
        templateUrl: 'find-groups-tab/views/group.html',
        controller: 'GroupController'
      })
      .otherwise({ redirectTo: '/' });
  });
