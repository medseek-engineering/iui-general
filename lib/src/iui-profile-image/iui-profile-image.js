/*doc
---
title: iui-profile-image
name: iui-profile-image
category: Directives
---
for showing profile images

<table class="table responsive">
  <caption>Options for iui-stepper</caption>
  <thead>
    <tr>
      <th>Attribute</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>iui-image</code></td>
      <td>String</td>
      <td>image data in a base64 string</td>
    </tr>
    <tr>
      <td><code>iui-gender</code></td>
      <td>Integer</td>
      <td>gender of individual. 0 for undefined, 1 for male, 2 for female</td>
    </tr>
  </tbody>
</table>

## Dependencies
<code>genderFilter</code>

```html_example
<iui-profile-image class="user-image" iui-image="profile.image" iui-gender="profile.gender"></iui-profile-image>
<iui-profile-image class="user-image" iui-image="" iui-gender="profile.gender"></iui-profile-image>
```
*/

angular.module('iui.profileImage', ['iui.filters'])
.directive('iuiProfileImage', ['genderFilter', function(genderFilter) {
    'use strict';
    return {
      restrict: 'E',
      scope :{
        iuiImage: '=',
        iuiGender: '=',
        iuiIsThumb: '=',
        iuiIsSquare: '='
      },
      templateUrl: app.root + '$iui-general/iui-profile-image/iui-profile-image.html',
      controller: function ($scope, genderFilter) {
        $scope.$watch('iuiGender', function(newVal) {
          $scope.profileGender = genderFilter(newVal);
        });
      }
    };
}]);
