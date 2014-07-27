'use strict';

angular.module('CreateGroupTabApp')
  .controller('CreateGroupController', function($scope, $location, GroupsService) {
    $scope.group = {
      name: '',
      description: '',
      location: ''
    };

    $scope.submit = function(group) {
      GroupsService.create(group).then(function(newGroup) {
        $location.path('/submission/' + newGroup.id);
      });
    };
  });
