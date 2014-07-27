'use strict';

angular.module('CreateGroupTabApp')
  .controller('CourseController', function($scope, $routeParams, CoursesService) {
    $scope.course = CoursesService.find(parseInt($routeParams.course_id));
  });
