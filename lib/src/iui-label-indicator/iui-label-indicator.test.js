(function () {
  'use strict';

  describe('iui-label-indicator directive', function () {
    var scope,
      element,
      el,
      elementWarning,
      elWarning,
      indicator;
    beforeEach(function () {
      module('app');
      module('iui.labelIndicator');
      module('templates');
    });
    beforeEach(inject(function ($compile, $rootScope) {
      scope = $rootScope.$new();
      scope.tooltipMessage = 'This here is some help text for an email field.';
      element = angular.element('<iui-label-indicator tooltip-data="tooltipMessage"></iui-label-indicator>');
      el = $compile(element)(scope);
      elementWarning = angular.element('<iui-label-indicator tooltip-data="tooltipMessage" is-warning-label="true"></iui-label-indicator>');
      elWarning = $compile(elementWarning)(scope);
      scope.$digest();
      indicator = el.find('.more-info-indicator');
    }));
    describe('Functionality Test Suite: ', function() {
      it('should have the tooltip display the correct value', function() {
        expect(indicator.attr('tooltip-html-unsafe')).toMatch('help');
      });
      it('should have a .is-warning class if is-warning-label is true', function() {
        var warning = elWarning.find('.more-info-indicator');
        expect(warning.hasClass('is-warning')).toBeTruthy();
      });
    });
  });
}(window.app));
