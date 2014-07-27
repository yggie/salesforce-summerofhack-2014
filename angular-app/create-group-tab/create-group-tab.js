'use strict';

angular.module('CreateGroupTabApp', ['ngRoute', 'services.Coursera', 'services.Remoting'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'create-group-tab/views/index.html',
        controller: 'IndexController'
      })
      .when('/categories/:category_id', {
        templateUrl: 'create-group-tab/views/courses-in-category.html',
        controller: 'CoursesInCategoryController'
      })
      .when('/create', {
        templateUrl: 'create-group-tab/views/create-group.html',
        controller: 'CreateGroupController'
      })
      .when('/courses/:course_id', {
        templateUrl: 'create-group-tab/views/course.html',
        controller: 'CourseController'
      })
      .otherwise({ redirectTo: '/' });
  });
