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

