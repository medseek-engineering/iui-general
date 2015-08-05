angular.module('iui.breadcrumb', [])
.directive('iuiBreadcrumb', [function () {
  'use strict';
  return {
    restrict: 'E',
    scope: {
      breadcrumb: '='
    },
    templateUrl: app.root + '$iui-general/templates/iui-breadcrumb.html'
  };
}]);
