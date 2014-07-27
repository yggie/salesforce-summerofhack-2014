'use strict';

angular.module('services.Coursera')
  .service('CategoriesService', function(SampleCategoriesService) {
    this.categories = SampleCategoriesService.payload.elements;

    var styleMappings = {
      'Computer Science: Artificial Intelligence': 'cs_artificial_intelligence',
      'Computer Science: Systems & Security': 'cs_systems_security',
      'Computer Science: Software Engineering': 'cs_software_engineering',
      'Computer Science: Theory': 'cs_theory',
      'Economics & Finance': 'economics_finance',
      'Chemistry': 'chemistry',
      'Business & Management': 'business_management',
      'Biology & Life Sciences': 'biology_life_sciences',
      'Arts': 'arts'
    };

    var i = this.categories.length;
    while (i--) {
      var category = this.categories[i],
          keys = Object.keys(styleMappings),
          index = keys.indexOf(category.name);

      if (index > -1) {
        category.style = styleMappings[category.name];
      } else {
        category.style = 'unknown';
      }

      category.name = category.name.replace('Computer Science', 'CS');
    }
    console.log('Categories');
    console.log(this.categories);

    return this;
  });
