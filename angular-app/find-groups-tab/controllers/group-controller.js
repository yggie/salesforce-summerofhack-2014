'use strict';

angular.module('FindGroupsTabApp')
  .controller('GroupController', function($scope, $routeParams, $location, GroupsService) {
    $scope.group = {};

    GroupsService.find(parseInt($routeParams.group_id)).then(function(group) {
      $scope.group = group;
    }, function(error) {
      console.log(error);
      $location.path('/');
    });

    $scope.join = function() {
      $location.path('/join/' + $scope.group.id);
    };
  });
