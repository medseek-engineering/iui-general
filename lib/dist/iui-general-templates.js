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
  $templateCache.put('/$iui-general/iui-stepper/iui-stepper.html',
    '<ng-form name="stepperForm" class="stepper-button">\n' +
    '  <label for="stepper_value">\n' +
    '    <span class="sr-only" ng-if="!stepperLabel">Choose a number</span>\n' +
    '    {{stepperLabel}}\n' +
    '  </label>\n' +
    '  <div class="input-group">\n' +
    '    <div class="input-group-btn">\n' +
    '      <span class="sr-only">Decrease number</span>\n' +
    '      <button type="button" role="button" class="btn btn-default" ng-click="decrement()">-</button>\n' +
    '    </div>\n' +
    '    <input type="number" name="stepper_value" id="stepper_value" class="form-control stepper-button-input" ng-model="value" min="{{minValue}}" max="{{maxValue}}" step="{{incrementBy}}" />\n' +
    '    <div class="input-group-btn">\n' +
    '      <span class="sr-only">Increase number</span>\n' +
    '      <button type="button" role="button" class="btn btn-default" ng-click="increment()">+</button>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '  <div class="form-group error-group">\n' +
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
