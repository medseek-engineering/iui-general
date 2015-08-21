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
      element = angular.element('<div class="form-group" ng-form name="minlengthExample"><input class="form-control" aria-label="Text field 1" name="textField1" placeholder="This field has 10 character minlength"  type="text"  ng-model="iuiTextField"  iui-minlength="10"><p class="error" ng-if="minlengthExample.textField1.$error.minlength">Field must contain 10 characters</p></div>');
      el = $compile(element)(scope);
      scope.$digest();

    }));
    it('help block disappears when text field has 10 characters', function () {
      var children = el.find('>p');
      expect(children.length).toBe(0);
    });
    it('help block appears when text field has 9 characters', function () {
      // 9 characters
      scope.iuiTextField = 'aaaaaaaaa';
      scope.$digest();
      var children = el.find('>p');
      expect(children.length).toBe(1);
    });
    
  });
}(window.app));
