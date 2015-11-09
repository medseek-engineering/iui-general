/*doc
---
title: gender
name: gender
category: Filters
---

Filter to translate Communicate Gender number into Unknown, Male (2), or Female (3)

```html_example
<div ng-controller="GenderFilterExampleController as example">
  <dl class="dl-horizontal dt-as-left-aligned short-list">
    <dt>Name</dt>
    <dd>{{example.profile.name}}</dd>
    <dt>Gender</dt>
    <dd>{{example.profile.gender | gender}}</dd>
  </dl>
</div>
```

```js_example
app.controller('GenderFilterExampleController', [function() {
  this.profile = {
    name: 'Agent 99',
    gender: 3
  };
}]);
```
*/

iuiFiltersModule.filter('gender', [function () {
  'use strict';
  return function (input) {
    var parsedInput = parseInt(input);
    if (parsedInput === 2) {
      return 'Male';
    } else if (parsedInput === 3) {
      return 'Female';
    } else {
      return 'Unknown';
    }
  };
}]);
