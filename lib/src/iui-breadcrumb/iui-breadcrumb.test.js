(function () {
  'use strict';

  describe('iui-breadcrumb directive', function () {
    var scope,
      element,
      el;
    beforeEach(function () {
      module('app');
      module('iui.breadcrumb');
      module('templates');
    });
    beforeEach(inject(function ($compile, $rootScope) {
      scope = $rootScope.$new();
      scope.breadcrumbArray = [
        {name: 'Grandparent Link', url:'/grandparent-url-path/'},
        {name: 'Parent Link', url:'/grandparent-url-path/parent-url-path'}
      ];
      element = angular.element('<iui-breadcrumb breadcrumb="breadcrumbArray"></iui-breadcrumb>');
      el = $compile(element)(scope);
      scope.$digest();

    }));
    it('contains a single ordered list', function () {
      var children = el.find('ol');
      expect(children.length).toBe(1);
    });
    it('ordered list has 2 child list items', function () {
      var children = el.find('ol > li');
      expect(children.length).toBe(2);
    });
    it('allows for multiple crumb links to be displayed', function () {
      var children = el.find('ol > li > a');
      expect(children.length).toBe(2);
    });
    it('has parent link that displays last', function () {
      var children = el.find('ol > li > a');
      expect(children.last().text()).toBe('Parent Link');
    });
    it('has breadcrumb link that has a url', function () {
      var children = el.find('ol > li > a');
      expect(children.first().attr('href')).toBe('/grandparent-url-path/');
    });
    it('has breadcrumb link that has a name', function () {
      var children = el.find('ol > li > a');
      expect(children.first().text().trim()).toBe('Grandparent Link');
    });
    it('only shows when the breadcrumb array has an object', function () {
      scope.breadcrumbArray = [];
      scope.$digest();
      var children = el.find('a');
      expect(children.length).toBe(0);
    });
    
  });
}(window.app));
