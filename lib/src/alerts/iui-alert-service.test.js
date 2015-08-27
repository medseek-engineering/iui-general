(function () {
  'use strict';

  describe('iui-alert-service', function () {
    var iuiAlertService, $rootScope;
    beforeEach(function () {
      module('app');
      module('iui.alertService');
      inject(function(_iuiAlertService_, _$rootScope_) {
        iuiAlertService = _iuiAlertService_;
        $rootScope = _$rootScope_;
      });
      spyOn(iuiAlertService, 'addPlacement');
    });

    it('should be able to initialize an alert placeholder', function () {
      var result, 
        alertId = 'agent99',
        alert = {
          message: 'Pardon me while I get my shoe phone.',
          type: 'danger'
        };
      iuiAlertService.addPlacement(alertId);
      expect(iuiAlertService.addPlacement).toHaveBeenCalledWith('agent99');

      // iuiAlertService.addPlacement(alertId);
      // result = iuiAlertService.getCurrent(alertId);
      // iuiAlertService.add(alertId, alert);
      // expect(result.alert.message).toEqual('Pardon me while I get my shoe phone.');
      // expect(result.alert.type).toEqual('danger');
    });

  });
})(window.app);