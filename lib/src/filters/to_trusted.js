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
