'use strict';

angular.module('FindGroupsTabApp')
  .controller('JoinController', function($scope, $routeParams, $location, GroupsService) {
    $scope.group = {};

    GroupsService.find(parseInt($routeParams.group_id)).then(function(group) {
      $scope.group = group;
    });

    $scope.submit = function() {
      $location.path('/success/' + $scope.group.id);
    };
  });
