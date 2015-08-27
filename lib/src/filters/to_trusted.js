/*doc
---
title: to_trusted
name: to_trusted
category: filters
---


```html_example
<div ng-controller="ToTrustedController">
  <span ng-bind-html="boom | to_trusted"></span>
</div>
```

```js_example
app.controller('ToTrustedController', ['$scope', function(scope) {
  scope.boom = '<strong>boom</strong>';
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