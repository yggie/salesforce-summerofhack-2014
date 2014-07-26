'use strict';

angular.module('services.Coursera')
  .service('CoursesService', function(SampleCoursesService) {
    this.courses = SampleCoursesService.payload.elements;
    console.log('Courses');
    console.log(this.courses);

    this.coursesInCategory = function(categoryId) {
      return this.courses.filter(function(course) {
        var categories = course.links.categories;
        return !categories || categories.indexOf(categoryId) != -1;
      });
    }

    return this;
  });
