(function () {
  'use strict';

  describe('to_trusted filter', function () {
    var scope,
      element,
      el;
    beforeEach(function () {
      module('app');
      module('iui.filters');
    });
    beforeEach(inject(function ($compile, $rootScope) {
      scope = $rootScope.$new();
      scope.htmlCode = '<strong>Boom</strong>';
      element = angular.element('<span ng-bind-html="htmlCode | to_trusted"></span>');
      el = $compile(element)(scope);
      scope.$digest();

    }));
    it('should read Boom when the filter is applied', function () {
      expect(el.text()).toBe('Boom');
      scope.htmlCode = '';
      scope.$digest();
      expect(el.text()).toBe('');
    });
    it('should contain a <strong> tag', function () {
      expect(el.find('strong').length).toBe(1);
      scope.htmlCode = '';
      scope.$digest();
      expect(el.find('strong').length).toBe(0);
    });

    
  });
}(window.app));
