(function () {
  'use strict';

  describe('iui-alert-placeholder', function () {
    var scope,
      element,
      el,
      mockAlertService,
      placement = {
        alert: {}
      };
    beforeEach(function () {
      module('app');
      module('templates');
      module('iui.alerts');
      mockAlertService = {
        getCurrent: jasmine.createSpy().and.returnValue(placement),
        clear: jasmine.createSpy(),
        addPlacement: jasmine.createSpy()
      };
      module(function ($provide) {
        $provide.value('iuiAlertService', mockAlertService);
      });
    });
    beforeEach(inject(function ($compile, $rootScope) {
      scope = $rootScope.$new();
      element = angular.element('<iui-alert-placeholder id="alert_agent99"></iui-alert-placeholder>');
      el = $compile(element)(scope);
      scope.$digest();
    }));

    it('should call the clear method in iui-alert-service', function () {
      expect(mockAlertService.clear).toHaveBeenCalled();
    });

    it('should call the addPlacement method with the id: `alert_agent99`', function () {
      expect(mockAlertService.addPlacement).toHaveBeenCalledWith('alert_agent99');
    });

    it('should not display text until an alert is set', function () {
      expect(el.text().trim()).toBe('');
    });

    describe('when a type:danger alert is added to the iui-alert-service', function () {
      beforeEach(function () {
        placement.alert = {
          message: 'Pardon me while I get my shoe phone.',
          type: 'danger'
        };
        scope.$digest();
      });
      it('should display the alert message', function () {
        expect(el.text().trim()).toBe('Pardon me while I get my shoe phone.');
      });
      it('should have the alert class', function () {
        expect(el.find('.alert').length).toEqual(1);
      });
      it('should have the alert-danger class', function () {
        expect(el.find('.alert-danger').length).toEqual(1);
      });
      describe('and when the alert is removed', function () {
        beforeEach(function () {
          placement.alert = {};
          scope.$digest();
        });
        it('should not display text', function () {
          expect(el.text().trim()).toBe('');
        });
        it('should NOT have the alert class', function () {
          expect(el.find('.alert').length).toEqual(0);
        });
        it('should NOT have the alert-danger class', function () {
          expect(el.find('.alert-danger').length).toEqual(0);
        });
      });

    });

  });
})(window.app);