'use strict';

angular.module('FindGroupsTabApp')
  .controller('IndexController', function($scope, $location, GroupsService) {
    $scope.groups = [];

    GroupsService.all().then(function(data) {
      $scope.groups = data;
    });

    $scope.select = function(group) {
      $location.path('/groups/' + group.id);
    };
  });
