/*doc
---
title: iui-stepper
name: iui-stepper
category: directives
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
      <td><code>stepper-label</code></td>
      <td>String</td>
      <td>'Choose a number'</td>
      <td>Enter a string value to set the label of the stepper.</td>
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
    stepper-label="stepperLabel">
  </iui-stepper>
</div>
```
```js_example
app.controller('StepperCtrl', ['$scope', function(scope) {
  scope.newValue = 5;
  scope.minValue = 0;
  scope.maxValue = 50;
  scope.incrementBy = 3;
  scope.stepperLabel = 'Choose a number';
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
        stepperLabel: '='
      },
      link: function(scope, element, attr) {
        scope.stepperLabelDefined = false;
        if(attr.stepperLabel) {
          scope.stepperLabelDefined = true;
        }
        scope.increment = function() {
          if(attr.incrementBy) {
           scope.value += scope.incrementBy;
          } else {
            scope.value += 1;
          }
          console.log(scope.incrementBy);
        };
        scope.decrement = function() {
          if(attr.incrementBy) {
           scope.value -= scope.incrementBy;
          } else {
            scope.value -= 1;
          }
        };
      }
    };
}]);
