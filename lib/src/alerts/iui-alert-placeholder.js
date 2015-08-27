/*doc
---
title: alerts
name: alerts
category: directives
---
Directives & services that allow for alerts to be displayed in specific areas

The id is used as the unique identifier for the alertService.
Always prefix the id with `alert_` like `alert_wizardStep`
This prefix allows us to easily identify alerts in the codebase

```html_example
  <iui-alert-placeholder id="alert_appTop"></iui-alert-placeholder>
  <div ng-controller="AlertController">
    <button class="btn btn-default" ng-click="triggerAlert()">Trigger Alert</button>
    <button class="btn btn-default" ng-click="hideAlert()">Hide Alert</button>
  </div>
```

```js_example
app.controller('AlertController', ['$scope', 'iuiAlertService', function(scope, iuiAlertService) {
  scope.triggerAlert = function () {
    var alert = {
      type: 'danger',
      message: 'Pardon me while I get my shoe phone.'
    };
    iuiAlertService.add('alert_appTop', alert);
  };
  scope.hideAlert = function () {
    iuiAlertService.clear('alert_appTop');
  };
}]);
```
*/

/* directive for displaying alerts in a specific area */
angular.module('iui.alerts', ['iui.alertService', 'iui.filters'])
.directive('iuiAlertPlaceholder', ['iuiAlertService', function (iuiAlertService) {
  'use strict';
  return {
    restrict: 'E',
    scope: {},
    templateUrl: app.root + '$iui-general/alerts/iui-alert-placeholder.html',

    link: function(scope, element, attrs) {
      var alertId = attrs.id;
      iuiAlertService.clear();
      iuiAlertService.addPlacement(alertId);
      scope.placementAlerts = iuiAlertService.getCurrent(alertId);
    }

  };
}]);