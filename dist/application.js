(function(window, document) {
'use strict';

angular.module('services.Coursera', [])
  .service('CourseraService', function() {
    return this;
  });

(function() {
  'use strict';

  angular.module('CreateGroupTabApp', ['services.Coursera']);
});

})(window, document);