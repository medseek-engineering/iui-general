(function () {
  'use strict';

  describe('iui-page-header directive', function () {
    var scope,
      element,
      el;
    beforeEach(function () {
      module('app');
      module('iui.pageHeader');
      module('templates');
    });
    beforeEach(inject(function ($compile, $rootScope) {
      scope = $rootScope.$new();
      scope.breadcrumbArray = [
        {name: 'Grandparent Link', url:'/grandparent-url-path/'},
        {name: 'Parent Link', url:'/grandparent-url-path/parent-url-path'}
      ];
      element = angular.element('<iui-page-header heading-text="foo" breadcrumb="breadcrumbArray"></iui-page-header>');
      el = $compile(element)(scope);
      scope.$digest();

    }));
    it('Has one h1', function () {
      var children = el.find('>div>h1');
      expect(children.length).toBe(1);
    });
    it('heading text is set', function () {
      var children = el.find('h1');
      expect(children.text()).toBe('foo');
    });
    it('contains the iui-breadcrumb directive', function () {
      var children = el.find('iui-breadcrumb');
      expect(children.length).toBe(1);
    });
    
  });
}(window.app));
