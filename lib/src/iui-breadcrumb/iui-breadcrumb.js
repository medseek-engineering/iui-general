angular.module('iui.breadcrumb', [])
.directive('iuiBreadcrumb', [function () {
  'use strict';
  return {
    restrict: 'E',
    scope: {
      breadcrumb: '='
    },
    templateUrl: app.root + '$iui-general/iui-breadcrumb/iui-breadcrumb.html'
  };
}]);
