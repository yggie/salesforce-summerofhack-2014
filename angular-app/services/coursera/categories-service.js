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
      'Arts': 'arts',
      'Education': 'education',
      'Energy & Earth Sciences': 'energy_earth',
      'Food and Nutrition': 'food_and_nutrition',
      'Humanities': 'humanities',
      'Information, Tech & Design': 'information_tech_design',
      'Law': 'law',
      'Mathematics': 'mathematics'
    };

    var i = this.categories.length;
    while (i--) {
      var category = this.categories[i],
          keys = Object.keys(styleMappings),
          index = keys.indexOf(category.name);

      if (index > -1) {
        category.style = styleMappings[category.name];
        category.name = category.name.replace('Computer Science', 'CS');
      } else {
        this.categories.splice(this.categories.indexOf(category), 1);
      }
    }

    this.categories.sort(function(a, b) {
      if (a.name > b.name) {
        return 1;
      } else if (a.name < b.name) {
        return -1;
      }

      return 0;
    });

    console.log('Categories');
    console.log(this.categories);

    return this;
  });
