angular.module('iui.general', ['iui.generalTemplates','iui.breadcrumb']);
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

(function(module) {
try {
  module = angular.module('iui.generalTemplates');
} catch (e) {
  module = angular.module('iui.generalTemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/$iui-general/templates/iui-breadcrumb.html',
    '<nav role="navigation" class="iui-breadcrumb-nav" ng-if="breadcrumb.length">\n' +
    '	<p class="sr-only" id="breadcrumblabel">You are here:</p>\n' +
    '	<ol class="iui-breadcrumb" aria-labledby="breadcrumblabel">\n' +
    '		<li ng-repeat="crumb in breadcrumb">\n' +
    '			<a ng-href="{{crumb.url}}" class="page-breadcrumb" title="{{crumb.name}}" ng-bind="crumb.name"></a>\n' +
    '		</li>\n' +
    '	</ol>\n' +
    '</nav>\n' +
    '');
}]);
})();
