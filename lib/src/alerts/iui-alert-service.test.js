(function () {
  'use strict';

  describe('iui-alert-service', function () {
    var iuiAlertService,
      result,
      alertId = 'alert_agent99',
      alert = {
        message: 'Pardon me while I get my shoe phone.',
        type: 'danger'
      };

    beforeEach(function () {
      module('app');
      module('iui.alerts');
      inject(function(_iuiAlertService_) {
        iuiAlertService = _iuiAlertService_;
      });
    });

    describe('when the addPlacement is called with the id `alert_agent99`', function() {
      beforeEach(function () {
        iuiAlertService.addPlacement(alertId);
      });

      describe('when the getCurrent method is called with the id `alert_agent99`', function () {
        beforeEach(function () {
          result = iuiAlertService.getCurrent(alertId);
        });

        it('should return an empty object {}', function () {
          expect(result).toEqual({});
        });

      });

      describe('AND when the add method is called with the id `alert_agent99` and '+
        'the object { message: \'Pardon me while I get my shoe phone.\', type: \'danger\'}', function () {
        beforeEach(function () {
          iuiAlertService.add(alertId, alert);
        });

        describe('AND when the getCurrent method is called', function () {
          beforeEach(function () {
            result = iuiAlertService.getCurrent(alertId);
          });

          it('should return an alert with the message `Pardon me while I get my shoe phone.`', function () {
            expect(result.alert.message).toBe('Pardon me while I get my shoe phone.');
          });

          it('should return an alert with the type `danger`', function () {
            expect(result.alert.type).toBe('danger');
          });

        });
      });

    });

  });
})(window.app);