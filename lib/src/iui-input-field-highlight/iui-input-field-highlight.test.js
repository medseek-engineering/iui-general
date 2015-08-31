(function () {
  'use strict';

  describe('iui-input-field-highlight directive', function () {
    var scope,
      element,
      el;
    beforeEach(function () {
      module('app');
      module('iui.inputFieldHighlight');
    });
    beforeEach(inject(function ($compile, $rootScope) {
      scope = $rootScope.$new();
      element = angular.element('<div>' +
        '<section iui-input-field-highlight class="form-group">' +
          '<input id="input" type="text">' +
        '</section>' +
        '<section iui-input-field-highlight class="form-group">' +
          '<textarea id="textarea"></textarea>' +
          '<select id="select"></select>' +
          '<button id="button">button</button>' +
          '<a href="" id="link">link</a>' +
          '<div tabindex="0" id="div">focusable div</div>' +
          '<table tabindex="0" id="table">focusable table</table>' +
        '</section>' +
      '</div>');
      el = $compile(element)(scope);
      scope.$digest();

    }));
    it('setting focus on input adds the `is-highlighted` class to section 1', function () {
      expect(el.find('section').eq(0).hasClass('is-highlighted')).not.toBeTruthy();
      el.find('#input').triggerHandler('focus');
      expect(el.find('section').eq(0).hasClass('is-highlighted')).toBeTruthy();
      el.find('#input').triggerHandler('blur');
      expect(el.find('section').eq(0).hasClass('is-highlighted')).not.toBeTruthy();
    });
    it('changing the focus in section 2 keeps the `is-highlighted` class on section 2', function () {
      expect(el.find('section').eq(1).hasClass('is-highlighted')).not.toBeTruthy();
      el.find('#textarea').triggerHandler('focus');
      expect(el.find('section').eq(1).hasClass('is-highlighted')).toBeTruthy();
      el.find('#select').triggerHandler('focus');
      expect(el.find('section').eq(1).hasClass('is-highlighted')).toBeTruthy();
      el.find('#button').triggerHandler('focus');
      expect(el.find('section').eq(1).hasClass('is-highlighted')).toBeTruthy();
      el.find('#link').triggerHandler('focus');
      expect(el.find('section').eq(1).hasClass('is-highlighted')).toBeTruthy();
      el.find('#div').triggerHandler('focus');
      expect(el.find('section').eq(1).hasClass('is-highlighted')).toBeTruthy();
      el.find('#table').triggerHandler('focus');
      expect(el.find('section').eq(1).hasClass('is-highlighted')).toBeTruthy();
      el.find('#table').triggerHandler('blur');
      expect(el.find('section').eq(1).hasClass('is-highlighted')).not.toBeTruthy();
    });
    
  });
}(window.app));
