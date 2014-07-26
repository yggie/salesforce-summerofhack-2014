'use strict';

angular.module('CreateGroupTabApp', ['ngRoute', 'services.Coursera'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'create-group-tab/views/index.html',
        controller: 'IndexController'
      })
      .when('/categories/:category_id', {
        templateUrl: 'create-group-tab/views/category.html',
        controller: 'CoursesInCategoryController'
      })
      .otherwise({ redirectTo: '/' });
  });
