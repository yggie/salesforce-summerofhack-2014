'use strict';

angular.module('CreateGroupTabApp')
  .controller('CoursesInCategoryController',
              function($scope, $routeParams, $location, CategoriesService, CoursesService) {
    var categoryId = parseInt($routeParams.category_id),
        selected = [];

    $scope.courses = CoursesService.coursesInCategory(categoryId);

    $scope.toggle = function(course) {
      var index = selected.indexOf(course);
      if (index > -1) {
        selected.splice(index, 1);
      } else {
        selected.push(course);
      }
    }.bind(this);

    $scope.canSubmit = function() {
      return selected.length > 0;
    }.bind(this);

    $scope.done = function() {
      $location.path('/create');
    }.bind(this);

    $scope.isSelected = function(course) {
      return selected.indexOf(course) > -1;
    }.bind(this);
  });
