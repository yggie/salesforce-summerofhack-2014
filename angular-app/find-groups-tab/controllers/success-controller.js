'use strict';

angular.module('FindGroupsTabApp')
  .controller('SuccessController', function($scope, $routeParams, $location, GroupsService) {
    $scope.group = {};

    GroupsService.find(parseInt($routeParams.group_id)).then(function(group) {
      $scope.group = group;
    });
  });
