'use strict';

angular.module('CreateGroupTabApp')
  .controller('CreateGroupController', function($scope, GroupsService) {
    $scope.group = {
      name: '',
      description: '',
      location: ''
    };

    $scope.submit = function(group) {
      GroupsService.create(group);
    };
  });
