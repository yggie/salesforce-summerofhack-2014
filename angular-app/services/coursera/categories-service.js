'use strict';

angular.module('services.Coursera')
  .service('CategoriesService', function(SampleCategoriesService) {
    this.categories = SampleCategoriesService.payload.elements;
    console.log('Categories');
    console.log(this.categories);

    return this;
  });
