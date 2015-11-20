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
