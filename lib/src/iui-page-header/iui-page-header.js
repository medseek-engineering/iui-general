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
