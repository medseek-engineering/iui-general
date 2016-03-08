angular.module('iui.progressBar', [])
.directive('iuiProgressBar', [function () {
  'use strict';
  return {
    restrict: 'E',
    scope: {
      barOptions: '=',
      barData: '=',
      displayFields: '='
    },
    templateUrl: app.root + '$iui-general/iui-progress-bar/iui-progress-bar.html',
    link: function(scope, element, attr) {
      
      if (!scope.barOptions.minValue) {
        scope.barOptions.minValue = 0;
      }
      
      scope.barWidth = function(bar) {
        var percentDone = (scope.barData[bar.field]/(scope.barOptions.maxValue-scope.barOptions.minValue))*100;
        return percentDone;
      };
      
    }
  };
}]);