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
  <iui-alert-placeholder id="alert_exampleArea"></iui-alert-placeholder>
  <div ng-controller="AlertController as alertMain">
    <button 
      class="btn btn-default" 
      ng-click="alertMain.iuiAlertService.add('alert_exampleArea', { type: 'info', message: 'Ah, it\'s the old... trick.'})">
      Trigger Example Area Alert
    </button>
    <button 
      class="btn btn-default" 
      ng-click="alertMain.iuiAlertService.add('alert_appTop', { type: 'danger', message: 'Pardon me while I get my shoe phone.'})">
      Trigger App Top Alert
    </button>
    <button 
      class="btn btn-default" 
      ng-click="alertMain.iuiAlertService.clear('alert_exampleArea')">
      Hide Example Area Alert
    </button>
    <button 
      class="btn btn-default" 
      ng-click="alertMain.iuiAlertService.clearAll()">
      Hide ALL Alerts
    </button>
  </div>
```

```js_example
app.controller('AlertController', ['$scope', 'iuiAlertService', function(scope, iuiAlertService) {
  this.iuiAlertService = iuiAlertService;
}]);
```
*/

/* directive for displaying alerts in a specific area */

iuiAlertsModule.directive('iuiAlertPlaceholder', ['iuiAlertService', function (iuiAlertService) {
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