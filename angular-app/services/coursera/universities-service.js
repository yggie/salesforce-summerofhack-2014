'use strict';

angular.module('services.Coursera')
  .service('UniversitiesService', function(SampleUniversitiesService) {
    this.universities = SampleUniversitiesService.payload.elements;

    this.find = function(id) {
      return this.universities.filter(function(university) {
        return id === university.id;
      })[0];
    }.bind(this);

    return this;
  });
