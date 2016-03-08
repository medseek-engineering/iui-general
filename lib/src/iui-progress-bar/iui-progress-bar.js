angular.module('iui.progressBar', [])
.directive('iuiProgressBar', [function () {
  'use strict';
  return {
    restrict: 'E',
    scope: {
      progressBarOptions: '='
    },
    templateUrl: app.root + '$iui-general/iui-progress-bar/iui-progress-bar.html',
    link: function(scope, element, attr) {
      
      if (!scope.progressBarOptions.minValue) {
        scope.progressBarOptions.minValue = 0;
      }
      
      scope.barWidth = function(bar) {
        var percentDone = (bar.currentValue/(scope.progressBarOptions.maxValue-scope.progressBarOptions.minValue))*100;
        return percentDone;
      };
      
    }
  };
}]);