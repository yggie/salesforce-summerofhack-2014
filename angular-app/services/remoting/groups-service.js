'use strict';

angular.module('services.Remoting')
  .service('GroupsService', function() {
    var groups = [];

    this.create = function(group) {
      groups.push({
        id: genId(),
        name: group.name,
        description: group.description,
        location: group.location
      });

      console.log(groups[groups.length - 1]);
    };

    function genId() {
      return Math.round(Math.random()*1e7);
    }

    return this;
  });
