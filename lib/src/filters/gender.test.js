(function () {
  'use strict';

  describe('gender filter', function () {
    var scope,
      element,
      el;
    beforeEach(function () {
      module('app');
      module('iui.filters');
    });
    beforeEach(inject(function ($compile, $rootScope) {
      scope = $rootScope.$new();
      scope.profile = {
        gender: 2
      };
      element = angular.element('<span>{{profile.gender | gender }}</span>');
      el = $compile(element)(scope);
      scope.$digest();

    }));
    it('should read Male when the gender is 2', function () {
      expect(el.text()).toBe('Male');
    });
    it('should read Female when the gender is 3', function () {
      scope.profile.gender = 3;
      scope.$digest();
      expect(el.text()).toBe('Female');
    });
    it('should read Unknown when the gender is 1', function () {
      scope.profile.gender = 1;
      scope.$digest();
      expect(el.text()).toBe('Unknown');
    });
    it('should read Unknown when the gender is undefined', function () {
      scope.profile.gender = undefined;
      scope.$digest();
      expect(el.text()).toBe('Unknown');
    });
    it('should read Unknown when the gender is 0', function () {
      scope.profile.gender = 0;
      scope.$digest();
      expect(el.text()).toBe('Unknown');
    });
    
  });
}(window.app));
