'use strict';

angular.module('services.Coursera')
  .service('CoursesService', function(SampleCoursesService, UniversitiesService) {
    this.courses = SampleCoursesService.payload.elements;

    var i = this.courses.length;
    while (i--) {
      var course = this.courses[i],
          universities = course.links.universities;

      course.universityName = universities.map(function(uniId) {
        var university = UniversitiesService.find(uniId);
        if (university) {
          return university.name;
        } else {
          return undefined;
        }
      }).filter(function(university) {
        return university;
      }).join(',');
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
