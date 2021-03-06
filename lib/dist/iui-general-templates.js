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
  $templateCache.put('/$iui-general/iui-progress-bar/default-template.html',
    '<span ng-class="{ \'sr-only\' : barOptions.hideDisplayName }">{{barOptions.showPercent ? (barWidth(bar) | number:barOptions.roundTo) + \'%\' : bar.displayName}}</span>');
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
    '    class="progress-bar {{bar.barClass}}"\n' +
    '    ng-include="barOptions.fieldTemplateUrl ? barOptions.fieldTemplateUrl : \'/$iui-general/iui-progress-bar/default-template.html\'">\n' +
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
    '      <button type="button" role="button" class="btn btn-default" ng-click="decrement()" ng-disabled="value < minValue"><span class="sr-only">Decrease number</span> -</button>\n' +
    '    </div>\n' +
    '    <input type="number" name="stepper_value" id="{{stepperId}}" class="form-control stepper-button-input" ng-model="value" min="{{minValue}}" max="{{maxValue}}" step="{{incrementBy}}" />\n' +
    '    <div class="input-group-btn">\n' +
    '      <button type="button" role="button" class="btn btn-default" ng-click="increment()" ng-disabled="value > maxValue"><span class="sr-only">Increase number</span> +</button>\n' +
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

(function(module) {
try {
  module = angular.module('iui.generalTemplates');
} catch (e) {
  module = angular.module('iui.generalTemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/$iui-general/images/tile_close.svg',
    '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n' +
    '   viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">\n' +
    '<g>\n' +
    '  <polygon fill="#CCCCCC" points="135.591,187.49 204.108,256.007 133.508,326.607 185.408,378.508 260.158,303.758 328.658,372.308\n' +
    '    378.509,322.458 307.942,251.874 376.459,183.357 326.608,133.507 256.008,204.107 187.491,135.59  "/>\n' +
    '</g>\n' +
    '</svg>\n' +
    '');
}]);
})();
