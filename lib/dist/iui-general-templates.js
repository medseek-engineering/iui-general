(function(module) {
try {
  module = angular.module('iui.generalTemplates');
} catch (e) {
  module = angular.module('iui.generalTemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/$iui-general/iui-breadcrumb/iui-breadcrumb.html',
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

(function(module) {
try {
  module = angular.module('iui.generalTemplates');
} catch (e) {
  module = angular.module('iui.generalTemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/$iui-general/iui-page-header/iui-page-header.html',
    '<iui-breadcrumb breadcrumb="breadcrumb"></iui-breadcrumb>\n' +
    '<div class="page-main-heading">\n' +
    '  <h1 class="page-header">{{headingText}}</h1>\n' +
    '</div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('iui.generalTemplates');
} catch (e) {
  module = angular.module('iui.generalTemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/$iui-general/iui-profile-image/iui-profile-image.html',
    '<span class="profile-image-wrap" ng-class="{\'profile_square\':iuiIsSquare, \'profile_rounded\':!iuiIsSquare, \'profile_thumb\':iuiIsThumb, \'profile_male\': profileGender === \'Male\',  \'profile_female\': profileGender === \'Female\', \'profile_unknown\':(profileGender !== \'Male\' && profileGender !== \'Female\')}">\n' +
    '	<span\n' +
    '		ng-if="iuiImage != \'data:image/jpeg;base64,null\' && iuiImage != null"\n' +
    '		ng-style="{\'background-image\':\'url(data:image/jpeg;base64,\'+iuiImage+\')\'}"\n' +
    '		class="profile_image">\n' +
    '	</span>\n' +
    '</span>\n' +
    '');
}]);
})();
