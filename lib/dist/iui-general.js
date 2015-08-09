angular.module('iui.general', ['iui.generalTemplates','iui.filters','iui.pageHeader','iui.profileImage']);
// 
// Gender filter
// Author: morgan.stone
//
angular.module('iui.filters', [])
.filter('gender', [function () {
  'use strict';
  return function (input) {
    var parsedInput = parseInt(input);
    if (parsedInput === 2) {
      return 'Male';
    } else if (parsedInput === 3) {
      return 'Female';
    } else {
      return 'Unknown';
    }
  };
}]);
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

angular.module('iui.pageHeader', ['iui.breadcrumb'])
.directive('iuiPageHeader', [function() {
    'use strict';
    return {
        restrict: 'E',
        scope: {
            headingText: '@',
            breadcrumb: '='
        },
        templateUrl: app.root + '$iui-general/iui-page-header/iui-page-header.html'
    };
}]);
angular.module('iui.profileImage', ['iui.filters'])
.directive('iuiProfileImage', ['genderFilter', function(genderFilter) {
    'use strict';
    return {
      restrict: 'E',
      scope :{
        iuiImage: '=',
        iuiGender: '=',
        iuiIsThumb: '=',
        iuiIsSquare: '='
      },
      templateUrl: app.root + '$iui-general/iui-profile-image/iui-profile-image.html',
      controller: function ($scope, genderFilter) {
        $scope.$watch('iuiGender', function(newVal) {
          $scope.profileGender = genderFilter(newVal);
        });
      }
    };
}]);


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
