angular.module('iui.general', ['iui.generalTemplates','iui.filters','iui.pageHeader','iui.profileImage', 'iui.progressBar','iui.minlength','iui.mustMatch','iui.inputFieldHighlight', 'iui.stepper', 'iui.labelIndicator', 'ui-bootstrap.overrides']);

var iuiFiltersModule = angular.module('iui.filters', []);
/*doc
---
title: gender
name: gender
category: Filters
---

Filter to translate Communicate Gender number into Unknown, Male (2), or Female (3)

```html_example
<div ng-controller="GenderFilterExampleController as example">
  <dl class="dl-horizontal dt-as-left-aligned short-list">
    <dt>Name</dt>
    <dd>{{example.profile.name}}</dd>
    <dt>Gender</dt>
    <dd>{{example.profile.gender | gender}}</dd>
  </dl>
</div>
```

```js_example
app.controller('GenderFilterExampleController', [function() {
  this.profile = {
    name: 'Agent 99',
    gender: 3
  };
}]);
```
*/

iuiFiltersModule.filter('gender', [function () {
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

/*doc
---
title: to_trusted
name: to_trusted
category: Filters
---

Filter to "trust" the HTML source. This is useful for binding HTML from the API.
Please use caution when using this filter. If you find yourself storing bits and
pieces of HTML in a service or controller, consider using an `ng-include` or a `directive` instead.

```html_example
<div ng-controller="ToTrustedController as example">
  <span ng-bind-html="example.quote | to_trusted"></span>
</div>
```

```js_example
app.controller('ToTrustedController', [function() {
  // This is strictly an example. Please do not store HTML in Javascript files
  this.quote = '<blockquote><em>Good thinking, Max.</em> &mdash; <strong>Agent 99</strong></blockquote>';
}]);
```
*/

// This filter allows you to use ng-bind-html when html is coming from the API
iuiFiltersModule.filter('to_trusted', ['$sce', function($sce){
  'use strict';
  return function(text) {
    return $sce.trustAsHtml(text);
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

/*doc
---
title: iui-input-field-highlight
name: iui-input-field-highlight
category: Directives
---

This directive, iui-input-field-highlight, looks for the focus state
on various input types, and applies a bg color change to keep the
user's attention on the section. It also separates each section without
the use of borders.

```html_example
<section class="panel panel-default" iui-input-field-highlight>
  <div class="panel-body">
    <div class="form-group">
      <input
        class="form-control"
        aria-label="Field 1"
        placeholder="Field 1"
        type="text">
    </div>
    <div class="form-group">
      <input
        class="form-control"
        aria-label="Field 2"
        placeholder="Field 2"
        type="text">
    </div>
  </div>
</section>
<section class="panel panel-default" iui-input-field-highlight>
  <div class="panel-body">
    <div class="form-group">
      <input
        class="form-control"
        aria-label="Field 3"
        placeholder="Field 3"
        type="text">
    </div>
    <div class="form-group">
      <input
        class="form-control"
        aria-label="Field 4"
        placeholder="Field 4"
        type="text">
    </div>
  </div>
</section>
```
*/



angular.module('iui.inputFieldHighlight', [])
.directive('iuiInputFieldHighlight', function() {
  'use strict';
  return {
    restrict: 'A',
    scope: {},
    link: function(scope, element) {
      var sectionWrapper = element;
      var inputSearchTypes ='input, textarea, select, div, button, a, table';
      scope.$watch(function() {
        scope.allInputsSize = sectionWrapper.find(inputSearchTypes).size();
      });
      scope.$watch('allInputsSize', function(newVal) {
        var allInputs = sectionWrapper.find(inputSearchTypes);
        allInputs.on('focus', function() {
          sectionWrapper.addClass('is-highlighted');
        });
        allInputs.on('blur', function() {
          sectionWrapper.removeClass('is-highlighted');
        });
      });
    }
  };
});

/*doc
---
title: iui-label-indicator
name: iui-label-indicator
category: Directives
---
iui-label-indicator is a small circle dot indicator with a question mark that is usually seen next to a label. This indicator allows for more information to be attached to a label in case there is no room to allow for a help block or descriptor text. Upon hovering over the label indicator, a tooltip will appear with the descriptor text.

<table class="table responsive">
  <caption>Options for iui-label-indicator</caption>
  <thead>
    <tr>
      <th>Attribute</th>
      <th>Type</th>
      <th>Default</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>tooltip-data</code></td>
      <td>Any</td>
      <td>Must be set</td>
      <td>This is the help text message that is to be displayed in the indicator's tooltip.</td>
    </tr>
    <tr>
      <td><code>is-warning-label</code></td>
      <td>Boolean</td>
      <td>false</td>
      <td>if set to true, will change the color of the circle dot to the orange warning color to indicate a warning message.</td>
    </tr>
  </tbody>
</table>

```html_example
<div ng-controller="labelIndicatorCtrl">
  <form class="form-horizontal">
    <div class="form-group">
      <label for="indicator_example" class="col-sm-2 control-label">
        Email Address (Normal)<iui-label-indicator tooltip-data="tooltipMessage"></iui-label-indicator>
      </label>
      <div class="col-sm-4">
        <input type="email" id="indicator_example" class="form-control">
      </div>
    </div>
    <div class="form-group">
      <label for="indicator_example" class="col-sm-2 control-label">
        Email Address (Warning)<iui-label-indicator tooltip-data="tooltipWarningMessage" is-warning-label="true"></iui-label-indicator>
      </label>
      <div class="col-sm-4">
        <input type="email" id="indicator_example" class="form-control">
      </div>
    </div>
  </form>
</div>
```
```js_example
app.controller('labelIndicatorCtrl', ['$scope', function(scope) {
  scope.tooltipMessage = 'This here is some help text for an email field.';
  scope.tooltipWarningMessage = 'Hold up! Something needs to be addressed here.';
}]);
```
*/

angular.module('iui.labelIndicator', [])
.directive('iuiLabelIndicator', [function () {
  'use strict';
  return {
    restrict: 'E',
    scope: {
      tooltipData: '=',
      isWarningLabel: '@'
    },
    templateUrl: app.root + '$iui-general/iui-label-indicator/iui-label-indicator.html'
  };
}]);

/*doc
---
title: iui-minlength
name: iui-minlength
category: Directives
---
Angular's minlength directive does not $observe or $eval the value of ngMinlength in Angular 1.2

```html_example
<div class="form-group" ng-form name="minlengthExample">
  <input
    class="form-control"
    aria-label="Text field 1"
    name="textField1"
    placeholder="This field has 10 character minlength"
    type="text"
    ng-model="iuiTextField"
    iui-minlength="10">
  <p ng-show="minlengthExample.textField1.$error.minlength">Field must contain 10 characters</p>
</div>
```
*/


angular.module('iui.minlength', [])
.directive('iuiMinlength',function(){
  'use strict';
  return {
    require: 'ngModel',
    link: function(scope,elm,attr,ngModel){

      var minlength = 0;

      var minLengthValidator = function(value){
        var validity = ngModel.$isEmpty(value) || value.length >= minlength;
        ngModel.$setValidity('minlength',  validity);
        return validity ? value : undefined;
      };

      attr.$observe('iuiMinlength', function(val){
         minlength = parseInt(val,10);
         minLengthValidator(ngModel.$viewValue);
      });


      ngModel.$parsers.push(minLengthValidator);
      ngModel.$formatters.push(minLengthValidator);
    }
  };
});

/*doc
---
title: iui-must-match
name: iui-must-match
category: Directives
---
Provides validation when two fields need to be the same (like matching passwords)

```html_example
<fieldset ng-form name="mustMatchExample">
  <legend class="sr-only">Field 1 must match Field 2</legend>
  <div class="form-group">
    <input
      class="form-control"
      aria-label="Text field 1"
      name="matchTextField"
      placeholder="This is the origination field"
      type="text"
      ng-model="iuiMatchTextField1">
  </div>
  <div class="form-group">
    <input
      class="form-control"
      aria-label="Text field 2"
      name="matchTextField2"
      placeholder="This field must match the field above"
      type="text"
      iui-must-match="iuiMatchTextField1"
      ng-model="iuiMatchTextField2">
    <p class="help-block" ng-if="mustMatchExample.matchTextField2.$error.mustMatch">This field must match the field above</p>
  </div>
</fieldset>
```
*/


angular.module('iui.mustMatch', [])
.directive('iuiMustMatch', [function () {
  'use strict';
  return {
    restrict: 'A',
    require: 'ngModel',
    link: function(scope, elem, attr, ngModel) {
      var comparison;
      var checkValidation = function(comparisonModel, currentModel) {
        ngModel.$setValidity('mustMatch', comparisonModel === currentModel);
      };

      scope.$watch(attr.iuiMustMatch, function(newVal) {
        comparison = newVal;
        checkValidation(comparison,ngModel.$modelValue);
      });

      //For DOM -> model validation
      ngModel.$parsers.unshift(function(value) {
         checkValidation(comparison,value);
         return value;
      });

      //For model -> DOM validation
      ngModel.$formatters.unshift(function(value) {
        checkValidation(comparison,value);
        return value;
      });
    }
  };
}]);

/*doc
---
title: iui-page-header
name: iui-page-header
category: Directives
---
General page header to be used on every page

```html_example
<div ng-controller="pageHeaderController">
  <iui-page-header breadcrumb="breadcrumb" heading-text="{{headingText}}"></iui-page-header>
</div>
```
```js_example
app.controller('pageHeaderController', ['$scope', function(scope) {
  scope.breadcrumb = [
    {name: 'Health Information', url: '/my-health-information/'},
    {name: 'Health Trackers', url: '/my-health-information/health-trackers/'}
  ];
  scope.headingText = 'This is a page header';
}]);
```
*/
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

/*doc
---
title: iui-profile-image
name: iui-profile-image
category: Directives
---
for showing profile images

<table class="table responsive">
  <caption>Options for iui-stepper</caption>
  <thead>
    <tr>
      <th>Attribute</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>iui-image</code></td>
      <td>String</td>
      <td>image data in a base64 string</td>
    </tr>
    <tr>
      <td><code>iui-gender</code></td>
      <td>Integer</td>
      <td>gender of individual. 0 for undefined, 1 for male, 2 for female</td>
    </tr>
  </tbody>
</table>

## Dependencies
<code>genderFilter</code>

```html_example
<iui-profile-image class="user-image" iui-image="profile.image" iui-gender="profile.gender"></iui-profile-image>
<iui-profile-image class="user-image" iui-image="" iui-gender="profile.gender"></iui-profile-image>
```
*/

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
      
      if (!scope.barOptions.roundTo && scope.barOptions.roundTo !== 0) {
        scope.barOptions.roundTo = 2;
      }
      
      scope.barWidth = function(bar) {
        var percentDone = (scope.barData[bar.field] / (scope.barOptions.maxValue - scope.barOptions.minValue)) * 100;
        return percentDone;
      };
      
    }
  };
}]);
/*doc
---
title: iui-stepper
name: iui-stepper
category: Directives
---
Standard stepper button to allow incrementing or decrementing a numerical value.

<table class="table responsive">
  <caption>Options for iui-stepper</caption>
  <thead>
    <tr>
      <th>Attribute</th>
      <th>Type</th>
      <th>Default</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>ng-model</code></td>
      <td>Variable</td>
      <td>Must be set</td>
      <td>ngModel will tie functionality to the value determined in the stepper, therefore, it is required to make it work.</td>
    </tr>
    <tr>
      <td><code>min-value</code></td>
      <td>Integer</td>
      <td>0</td>
      <td>Sets a minimum integer value. If not set, will default to 0.</td>
    </tr>
    <tr>
      <td><code>max-value</code></td>
      <td>Integer</td>
      <td>None</td>
      <td>Sets a ceiling to the value that can be incremented.</td>
    </tr>
    <tr>
      <td><code>increment-by</code></td>
      <td>Integer</td>
      <td>1</td>
      <td>In the case where you need to increment by multiples of an integer. Set to 1 by default.</td>
    </tr>
    <tr>
      <td><code>stepper-id</code></td>
      <td>String</td>
      <td>None</td>
      <td>Pass in a unique identifier for linking form input to label.</td>
    </tr>
  </tbody>
</table>

```html_example
<div ng-controller="StepperCtrl">
  <iui-stepper
    ng-model="newValue"
    min-value="minValue"
    max-value="maxValue"
    increment-by="incrementBy"
    stepper-id="stepper_value">
  </iui-stepper>
</div>
```
```js_example
app.controller('StepperCtrl', ['$scope', function(scope) {
  scope.newValue = 5;
  scope.minValue = 0;
  scope.maxValue = 50;
  scope.incrementBy = 3;
}]);
```
*/

angular.module('iui.stepper', [])
.directive('iuiStepper', [function() {
  'use strict';
    return {
      restrict: 'E',
      templateUrl: app.root + '$iui-general/iui-stepper/iui-stepper.html',
      scope: {
        value: '=ngModel',
        minValue: '=',
        maxValue: '=',
        incrementBy: '=',
        stepperId: '@'
      },
      link: function(scope, element, attr) {
        scope.increment = function() {
          scope.value += (scope.incrementBy) ? scope.incrementBy : 1;
        };
        scope.decrement = function() {
          scope.value -= (scope.incrementBy) ? scope.incrementBy : 1;
        };
      }
    };
}]);

/*

Service to update menus in routes.json file

*/

angular.module('iui.menuService', [])
.factory('MenuService',['$q', function MenuServiceFactory($q) {
  'use strict';
  var deferred = $q.defer();
  return {
    menus: deferred.promise,
    setMenus: function(menus) {
      deferred.resolve(menus);
    },
    getMenus: function() {
      return this.menus;
    },
    // gets the moduleTitle based on the moduleInstanceId
    getModuleTitle: function (moduleInstanceId) {
      return this.getMenus().then(function (menus) {
        if (menus.navigation) {
          return _.findWhere(menus.navigation, {ModuleInstanceId: moduleInstanceId}).Name;
        }
      });
    },
    // updates the app.routes populated from the routes.json file with proper titles for each module
    updateRouteTitles: function (menus) {
      _.each(app.routes, function (route) {
        _.each(menus, function (menuItem) {
          if (menuItem.ModuleId && route.moduleId && menuItem.ModuleId.trim().toUpperCase() === route.moduleId.trim().toUpperCase()) {
            route.title = menuItem.Name;
          }
        });
      });
    }
  };
}]);

/*

Directive override to allow for scrolling the popup when using the keyboard to tab through the list.

*/

angular.module('ui-bootstrap.overrides', []).directive('typeahead', function() {
  'use strict';
  return {
    restrict: 'A',
    priority: 6000, // Let's ensure AngularUI Typeahead directive gets initialized first!
    link: function(scope, element) {
      // Bind keyboard events: arrows up(38) / down(40)
      element.bind('keydown', function(evt) {
        if (evt.which === 38 || evt.which === 40) {
          // Broadcast a possible change of the currently active option:
          // (Note that we could pass the activeIdx value as event data but AngularUI Typeahead directive
          //  has its own local scope which makes it hard to retrieve, see:
          //  https://github.com/angular-ui/bootstrap/blob/7b7039b4d94074987fa405ee1174cfe7f561320e/src/typeahead/typeahead.js#L104)
          scope.$broadcast('TypeaheadActiveChanged');
        }
      });
    }
  };
}).directive('typeaheadPopup', function() {
  'use strict';
  return {
    restrict: 'EA',
    priority: 1000, // Let's ensure AngularUI Typeahead directive gets initialized first!
    link: function(scope, element, attrs) {
      var unregisterFn = scope.$on('TypeaheadActiveChanged', function() {
        if (scope.activeIdx !== -1) {
          console.log('We are focusing the screen');
          // Retrieve active Typeahead option:
          var option = document.querySelector('#' + attrs.id + '-option-' + scope.activeIdx);
          // Make sure option is visible:
          option.scrollIntoView(false);
        }
      });
      // Ensure listener is unregistered when $destroy event is fired:
      scope.$on('$destroy', unregisterFn);
    }
  };
});

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
  $templateCache.put('/$iui-general/iui-label-indicator/iui-label-indicator.html',
    '<span class="more-info-indicator" tooltip-placement="top" tooltip-append-to-body="true" tooltip-trigger="mouseenter" tooltip-html-unsafe="{{tooltipData}}" ng-class="{\'is-warning\': isWarningLabel}"></span>\n' +
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
    '	<span\n' +
    '		class="profile_image"\n' +
    '		ng-if="!(iuiImage != \'data:image/jpeg;base64,null\' && iuiImage != null)"\n' +
    '		ng-include="\'/$iui-general/images/profile-unknown.svg\'">\n' +
    '	</span>\n' +
    '</span>\n' +
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
  $templateCache.put('/$iui-general/iui-progress-bar/iui-progress-bar.html',
    '<div class="progress">\n' +
    '  <div\n' +
    '    ng-repeat="bar in displayFields track by $index" \n' +
    '    role="progressbar"\n' +
    '    aria-valuenow="{{barData[bar.field]}}"\n' +
    '    aria-valuemin="{{barOptions.minValue}}"\n' +
    '    aria-valuemax="{{barOptions.maxValue}}"\n' +
    '    ng-style="{\'width\': barWidth(bar) + \'%\'};"\n' +
    '    class="progress-bar {{bar.barClass}}">\n' +
    '    <span ng-class="{ \'sr-only\' : barOptions.hideDisplayName }">{{barOptions.showPercent ? (barWidth(bar) | number:barOptions.roundTo) + \'%\' : bar.displayName}}</span>\n' +
    '  </div>\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('iui.generalTemplates');
} catch (e) {
  module = angular.module('iui.generalTemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/$iui-general/iui-stepper/iui-stepper.html',
    '<ng-form name="stepperForm" class="stepper-button">\n' +
    '  <div class="input-group">\n' +
    '    <div class="input-group-btn">\n' +
    '      <span class="sr-only">Decrease number</span>\n' +
    '      <button type="button" role="button" class="btn btn-default" ng-click="decrement()">-</button>\n' +
    '    </div>\n' +
    '    <input type="number" name="stepper_value" id="{{stepperId}}" class="form-control stepper-button-input" ng-model="value" min="{{minValue}}" max="{{maxValue}}" step="{{incrementBy}}" />\n' +
    '    <div class="input-group-btn">\n' +
    '      <span class="sr-only">Increase number</span>\n' +
    '      <button type="button" role="button" class="btn btn-default" ng-click="increment()">+</button>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '  <div class="form-group error-group" ng-show="stepperForm.stepper_value.$error">\n' +
    '    <span class="error" ng-show="stepperForm.stepper_value.$error.number">Please enter a valid number.</span>\n' +
    '    <span class="error" ng-show="stepperForm.stepper_value.$error.min">Sorry! Invalid value. Minimum value is {{minValue}}.</span>\n' +
    '    <span class="error" ng-show="stepperForm.stepper_value.$error.max">Oops! Max value exceeded. Maximum value is {{maxValue}}.</span>\n' +
    '  </div>\n' +
    '</ng-form>\n' +
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
  $templateCache.put('/$iui-general/images/icon-checkmark-white.svg',
    '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n' +
    '<svg width="60px" height="59px" viewBox="0 0 60 59" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n' +
    '    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n' +
    '        <path d="M57.451,2.44 C54.52,0.107 50.258,0.588 47.925,3.513 L21.469,43.318 L9.922,31.776 C7.545,29.393 3.816,29.274 1.589,31.495 C-0.633,33.717 -0.51,37.445 1.867,39.826 L19.281,57.243 C21.316,59.275 24.285,59.551 26.513,58.229 C27.472,57.801 28.353,57.172 29.054,56.296 L58.521,11.96 C60.857,9.035 60.371,4.775 57.451,2.44 L57.451,2.44 Z" id="Shape" fill="#FFFFFF" sketch:type="MSShapeGroup"></path>\n' +
    '    </g>\n' +
    '</svg>\n' +
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
  $templateCache.put('/$iui-general/images/icon-exclamation-mark-white.svg',
    '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n' +
    '<svg width="16px" height="95px" viewBox="0 0 16 95" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n' +
    '    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n' +
    '        <g id="noun_264893_cc" sketch:type="MSLayerGroup" fill="#FFFFFF">\n' +
    '            <path d="M15.721,87.299 C15.721,91.552 12.262,95 7.999,95 C3.734,95 0.279,91.552 0.279,87.299 C0.279,83.042 3.734,79.595 7.999,79.595 C12.262,79.597 15.721,83.042 15.721,87.299 L15.721,87.299 L15.721,87.299 Z" id="Shape" sketch:type="MSShapeGroup"></path>\n' +
    '            <path d="M0.279,7.703 C0.279,3.448 3.736,0 8,0 L8,0 C12.264,0 15.721,3.448 15.721,7.703 L15.721,60.643 C15.721,64.898 12.264,68.347 8,68.347 L8,68.347 C3.736,68.347 0.279,64.898 0.279,60.643 L0.279,7.703 L0.279,7.703 Z" id="Shape" sketch:type="MSShapeGroup"></path>\n' +
    '        </g>\n' +
    '    </g>\n' +
    '</svg>\n' +
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
  $templateCache.put('/$iui-general/images/profile-unknown.svg',
    '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n' +
    '	 width="540px" height="540px" viewBox="0 0 540 540" enable-background="new 0 0 540 540" xml:space="preserve">\n' +
    '<g>\n' +
    '	<g>\n' +
    '		<path class="icon" fill="#D5D5D5" d="M540,540v-73.281c-21.952-10.43-44.013-20.639-66.434-29.951c-25.871-10.753-47.868-25.665-64.646-48.162\n' +
    '			c-2.067-2.764-4.553-5.488-7.425-7.32c-5.18-3.306-9.539-5.738-9.231-13.711c0.27-6.911,4.892-9.59,7.509-14.277\n' +
    '			c4.345-7.766,6.86-16.794,8.843-25.58c1.947-8.647,2.271-17.659,3.379-27.124c12.707,2.388,16.532-7.023,18.476-14.995\n' +
    '			c4.529-18.592,7.301-37.622,10.36-56.542c0.361-2.246-2.098-4.863-2.938-7.412c-0.772-2.34-1.678-4.843-1.576-7.235\n' +
    '			c0.911-20.996,3.354-42.02,2.773-62.964c-0.804-28.999-9.344-55.563-32.068-75.715c-18.591-16.484-40.638-25.805-64.566-31.145\n' +
    '			c-6.266-1.399-12.662-2.202-18.999-3.279h-1.612c-6.602,1.053-13.245,1.905-19.798,3.192c-20.483,4.023-41.024,7.945-54.7,26.325\n' +
    '			c-0.962,1.293-3.768,1.455-5.77,1.695c-22.469,2.69-31.076,18.677-35.567,37.9c-4.327,18.499-4.718,37.267-1.83,56.147\n' +
    '			c2.586,16.863,4.56,33.822,6.486,48.375c-2.509,6.494-6.75,11.897-5.994,16.476c3.373,20.425,7.957,40.664,12.58,60.859\n' +
    '			c1.481,6.46,5.832,9.907,14.087,5.9c1.262,7.88,2.777,14.949,3.455,22.103c1.392,14.628,2.448,28.928,17.963,37.024\n' +
    '			c6.08,3.171,3.65,19.322-3.003,20.404c-14.29,2.316-20.425,12.799-25.954,23.886c-6.19,12.414-15.345,20.793-28.292,26.049\n' +
    '			c-21.399,8.687-42.603,17.907-63.532,27.666c-20.937,9.756-41.666,20.023-62.062,30.86c-17.726,9.416-26.303,24.913-26.734,45.049\n' +
    '			c-0.062,2.928-0.146,5.855-0.228,8.783H540z"/>\n' +
    '	</g>\n' +
    '</g>\n' +
    '</svg>\n' +
    '');
}]);
})();
