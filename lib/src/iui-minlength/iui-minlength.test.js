(function () {
  'use strict';

  describe('iui-minlength directive', function () {
    var scope,
      element,
      el;

    beforeEach(function () {
      module('app');
      module('iui.minlength');
    });

    beforeEach(inject(function ($compile, $rootScope) {
      scope = $rootScope.$new();
      // has 10 characters
      scope.iuiTextField = 'aaaaaaaaaa';
      element = angular.element('<input type="text" ng-model="iuiTextField" iui-minlength="10">');
      el = $compile(element)(scope);
      scope.$digest();

    }));

    it('input does not have `ng-invalid-minlength` class when input is longer than 10 characters', function () {
      expect(el.hasClass('ng-invalid-minlength')).toBe(false);
    });

    it('input has `ng-invalid-minlength` class when input is shorter than 10 characters', function () {
      // remove 1 character
      scope.iuiTextField = 'aaaaaaaaa';
      scope.$digest();
      expect(el.hasClass('ng-invalid-minlength')).toBe(true);
    });
    
  });
}(window.app));
