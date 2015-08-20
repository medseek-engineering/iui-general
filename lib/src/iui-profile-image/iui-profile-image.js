/*doc
---
title: iui-profile-image
name: iui-profile-image
category: directives
---
for showing profile images

<dl class="dl-horizontal dt-as-left-aligned short-list">
  <dt>iui-image</dt>
  <dd><code>String</code> image data in a base64 string</dd>
  <dt>iui-gender</dt>
  <dd><code>Interger</code> gender of individual. 0 for undefined, 1 for male, 2 for female</dd>
</dl>

## Dependencies
genderFilter

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

