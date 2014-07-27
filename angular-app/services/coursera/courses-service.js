'use strict';

angular.module('services.Coursera')
  .service('CoursesService', function(SampleCoursesService, UniversitiesService) {
    this.courses = SampleCoursesService.payload.elements;

    var i = this.courses.length;
    while (i--) {
      var course = this.courses[i],
          universities = course.links.universities,
          j = universities.length,
          validUniversities = [];

      while (j--) {
        var uni = UniversitiesService.find(universities[j]);
        if (uni) {
          validUniversities.push(uni.name);
        }
      }

      course.universityName = validUniversities.join(',');
    }

    console.log('Courses');
    console.log(this.courses);

    this.coursesInCategory = function(categoryId) {
      return this.courses.filter(function(course) {
        var categories = course.links.categories;
        return !categories || categories.indexOf(categoryId) != -1;
      });
    };

    this.find = function(id) {
      return this.courses.filter(function(course) {
        return course.id === id;
      })[0];
    }.bind(this);

    return this;
  });
