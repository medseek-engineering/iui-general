(function () {
  'use strict';

  describe('iui-alert-service', function () {
    var iuiAlertService,
      $timeout,
      callbackTest = false,
      result,
      result1,
      result2,
      alertId = 'alert_agent99',
      alertId2 = 'alert_chief',
      alert = {
        message: 'Pardon me while I get my shoe phone.',
        type: 'danger',
        canClose: true,
        activeFor: 4000 // alerts with type: danger should never have a timeout. This is for testing that
      },
      alert2 = {
        message: 'Ah, it\'s the old... trick.',
        type: 'success',
        activeFor: 4000,
        callback: function () {
          callbackTest = true;
        }
      };

    beforeEach(function () {
      module('app');
      module('iui.alerts');
      inject(function(_iuiAlertService_, _$timeout_) {
        iuiAlertService = _iuiAlertService_;
        $timeout = _$timeout_;
      });
    });

    describe('when the addPlacement(\'alert_agent99\') method is called', function() {
      beforeEach(function () {
        iuiAlertService.addPlacement(alertId);
      });

      describe('when the getCurrent(\'alert_agent99\') method is called', function () {
        beforeEach(function () {
          result = iuiAlertService.getCurrent(alertId);
        });

        it('should return an empty object {}', function () {
          expect(result).toEqual({});
        });

      });

      describe('AND when the add method is called with the id `alert_agent99` and '+
        'the object { message: \'Pardon me while I get my shoe phone.\', type: \'danger\', canClose: true}', function () {
        beforeEach(function () {
          iuiAlertService.add(alertId, alert);
        });

        describe('AND when the getCurrent(alertId) method is called', function () {
          beforeEach(function () {
            result = iuiAlertService.getCurrent(alertId);
          });

          it('should return an alert with the message `Pardon me while I get my shoe phone.`', function () {
            expect(result.alert.message).toBe('Pardon me while I get my shoe phone.');
          });

          it('should return an alert with the type `danger`', function () {
            expect(result.alert.type).toBe('danger');
          });
          it('should not have a $timeout because alerts with type: danger should not have a $timeout', function() {
            expect(function() {$timeout.flush();}).toThrow();
          });

          describe('AND when the clear(alertId) method is called', function () {
            it('should return an empty object {}', function () {
              iuiAlertService.clear(alertId);
              result = iuiAlertService.getCurrent(alertId);
              expect(result.alert).toEqual({});
            });
          });

        });
      });
      
      describe('AND when the add method is called with the id `alert_agent99` and '+
        'the object { message: \'Ah, it\'s the old... trick.\', type: \'success\', activeFor: 4000}', function () {
        beforeEach(function () {
          iuiAlertService.add(alertId, alert2);
        });
        describe('AND when the getCurrent(alertId) method is called', function () {
          beforeEach(function () {
            result = iuiAlertService.getCurrent(alertId);
          });

          it('should return an alert with the message \'Ah, it\'s the old... trick.\'', function () {
            expect(result.alert.message).toBe('Ah, it\'s the old... trick.');
          });

          it('should return an alert with the type `success`', function () {
            expect(result.alert.type).toBe('success');
          });

          it('callbackTest should be false', function () {
            expect(callbackTest).not.toBeTruthy();
          });
          describe('after 4 seconds', function () {
            beforeEach(function () {
              // flush $timeout queue to fire off deferred function
              $timeout.flush();
              result = iuiAlertService.getCurrent(alertId);
            });
            it('should return an empty object {}', function() {
              expect(result.alert).toEqual({});
            });
            it('should fire the callback function and set callbackTest to true', function () {
              expect(callbackTest).toBeTruthy();
            });
          });
        });
      });

    });

    // Testing multiple placeholders at the same time
    describe('when both addPlacement(\'alert_angent99\') and addPlacement(\'alert_chief\') and getCurrent is called for both IDs', function () {
      beforeEach(function () {
        iuiAlertService.addPlacement(alertId);
        iuiAlertService.addPlacement(alertId2);
        result1 = iuiAlertService.getCurrent(alertId);
        result2 = iuiAlertService.getCurrent(alertId2);
      });
      it('should return an empty object {}', function () {
        expect(result1).toEqual({});
        expect(result2).toEqual({});
      });
      describe('when messages are sent to both placeholders', function () {
        beforeEach(function () {
          iuiAlertService.add(alertId, alert);
          iuiAlertService.add(alertId2, alert2);
        });
        it('both placeholders should display their respective messages', function () {
          result1 = iuiAlertService.getCurrent(alertId);
          result2 = iuiAlertService.getCurrent(alertId2);
          expect(result1.alert.message).toBe('Pardon me while I get my shoe phone.');
          expect(result2.alert.message).toBe('Ah, it\'s the old... trick.');
        });
        describe('when the clearAll() method is called', function () {
          beforeEach(function () {
            iuiAlertService.clearAll();
            result1 = iuiAlertService.getCurrent(alertId);
            result2 = iuiAlertService.getCurrent(alertId2);
          });
          it('both placeholders should return an empty object', function () {
            expect(result1.alert).toEqual({});
            expect(result2.alert).toEqual({});
          });
          it('should fire the callback function and set callbackTest to true', function () {
            expect(callbackTest).toBeTruthy();
          });
        });
      });
    });
  });
})(window.app);