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