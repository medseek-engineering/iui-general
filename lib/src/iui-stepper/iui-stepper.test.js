(function () {
  'use strict';

  describe('iui-stepper directive', function () {
    var scope,
      element,
      el;
    beforeEach(function () {
      module('app');
      module('iui.stepper');
      module('templates');
    });
    beforeEach(inject(function ($compile, $rootScope) {
      scope = $rootScope.$new();
      scope.value = 5;
      element = angular.element('<iui-stepper ng-model="value" min-value="1" max-value="99" increment-by="2" stepper-id="stepper_value"></iui-stepper>');
      el = $compile(element)(scope);
      scope.$digest();
    }));
    describe('Form Semantics Test Suite: ', function() {
      it('should have a name set', function() {
        var form = el.find('ng-form');
        expect(form.attr('name')).toBe('stepperForm');
      });
      it('should have a type', function() {
        var form = el.find('ng-form');
        expect(form.find('input').attr('type')).not.toBeUndefined();
      });
    });
    describe('Functionality Test Suite: ', function() {
      it('should have ngModel match the element ngModel', function() {
        var form = el.find('ng-form');
        expect(form.find('input').attr('ng-model')).toMatch(el.attr('ng-model'));
      });
      describe('Button Event Tests: ', function() {
        it('should call the decrement function', function() {
          var iscope = el.isolateScope(),
            decrementButton = el.find('button').eq(0);
          spyOn(iscope, 'decrement');
          decrementButton.triggerHandler('click');
          expect(iscope.decrement).toHaveBeenCalled();
        });
        it('should call the increment function', function() {
          var iscope = el.isolateScope(),
            incrementButton = el.find('button').eq(1);
          spyOn(iscope, 'increment');
          incrementButton.triggerHandler('click');
          expect(iscope.increment).toHaveBeenCalled();
        });
      });
      describe('Increase and Decrease Function Tests: ', function() {
        it('should decrease by 2 on decrease button event', function() {
          var input = el.find('input').eq(0),
              decrementButton = el.find('button').eq(0);
          decrementButton.triggerHandler('click');
          expect(input.val()).toBe('3');
        });
        it('should increase by 2 on increase button event', function() {
          var input = el.find('input').eq(0),
              incrementButton = el.find('button').eq(1);
          incrementButton.triggerHandler('click');
          expect(input.val()).toBe('7');
        });
        it('should disable the decrement button if value is less than min value', function() {
          scope.value = 0;
          scope.$digest();
          var input = el.find('input').eq(0),
              decrementButton = el.find('button').eq(0);
          expect(decrementButton.attr('disabled')).toBe('disabled');
        });
        it('should disable the increment button if value is greater than max value', function() {
          scope.value = 100;
          scope.$digest();
          var input = el.find('input').eq(0),
              incrementButton = el.find('button').eq(1);
          expect(incrementButton.attr('disabled')).toBe('disabled');          
        });
      });
    });
  });
}(window.app));
