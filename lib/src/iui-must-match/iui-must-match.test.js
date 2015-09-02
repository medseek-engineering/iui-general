(function () {
  'use strict';

  describe('iui-must-match directive', function () {
    var scope,
      element,
      el;
    beforeEach(function () {
      module('app');
      module('iui.mustMatch');
    });
    beforeEach(inject(function ($compile, $rootScope) {
      scope = $rootScope.$new();
      scope.iuiMatchTextField1 = 'abc123 --';
      scope.iuiMatchTextField2 = 'abc123 --';
      element = angular.element('<div><input ' +
        'type="text" ' +
        'ng-model="iuiMatchTextField1">' +
      '<input ' +
        'id="textField2"' +
        'type="text" ' +
        'iui-must-match="iuiMatchTextField1"' +
        'ng-model="iuiMatchTextField2"></div>');
      el = $compile(element)(scope);
      scope.$digest();

    }));
    it('input 2 does not have `ng-invalid-must-match` class when input 2 matches input 1', function () {
      var textField2 = el.find('#textField2');
      expect(textField2.hasClass('ng-invalid-must-match')).toBe(false);
    });
    it('input 2 has `ng-invalid-must-match` class when input 2 does not match input 1', function () {
      // remove 1 character
      scope.iuiMatchTextField2 = 'abc123 -';
      scope.$digest();
      var textField2 = el.find('#textField2');
      expect(textField2.hasClass('ng-invalid-must-match')).toBe(true);
    });
    
  });
}(window.app));
