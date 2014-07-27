'use strict';

angular.module('CreateGroupTabApp')
  .controller('IndexController', function($scope, CategoriesService, CoursesService) {
    $scope.categories = CategoriesService.categories;
  });
