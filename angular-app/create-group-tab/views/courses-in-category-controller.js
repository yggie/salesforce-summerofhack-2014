'use strict';

angular.module('CreateGroupTabApp')
  .controller('CoursesInCategoryController',
              function($scope, $routeParams, CategoriesService, CoursesService) {
    var categoryId = parseInt($routeParams.category_id),
        selected = [];

    $scope.courses = CoursesService.coursesInCategory(categoryId);

    $scope.add = function(course) {
      selected.push(course);
      console.log('Added ' + course.name);
    }

    $scope.remove = function(course) {
      var index = selectd.indexOf(course);
      if (index > -1) {
        selected.splice(index, 1);
      }
    }
  });
