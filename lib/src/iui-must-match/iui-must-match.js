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
