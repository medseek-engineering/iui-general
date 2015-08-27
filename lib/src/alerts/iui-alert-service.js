iuiAlertsModule.factory('iuiAlertService', ['$timeout', function (timeout) {
  'use strict';
  var defaultTimeOut = 20000,
  placements = {},
  callback = '',
  DEFAULT_PLACEMENT = 'alert_appTop';

  return {

    getCurrent: function (id) {
      return placements[id || DEFAULT_PLACEMENT];
    },

    addPlacement: function (id) {
      if (!placements[id]) {
        placements[id] = {};
      }
    },

    /* add alert */
    add: function (placement, alertObject) {

      var type = alertObject.type, 
        message = alertObject.message, 
        activeFor = alertObject.activeFor || 0, 
        callback = alertObject.callback,
        canClose = alertObject.canClose;
      
      placement = placement || DEFAULT_PLACEMENT;
      var currentPlacement = placements[placement];
      if(!currentPlacement){
        currentPlacement = placements[placement] = {};
      }

      // if the message is an error, it does not need a timeout
      if (type === 'danger') {
        activeFor = 0;
      }

      currentPlacement.callback = callback;

      currentPlacement.alert = {
        type: type,
        message: message,
        placement: placement,
        activeFor: activeFor,
        canClose: canClose,
        close: function () {
          return asvc.closeAlert();
        }
      };

      if (currentPlacement.promise) {
        timeout.cancel(currentPlacement.promise);
      }

      if (activeFor === 0) {
        return;
      }

      currentPlacement.promise = timeout(function () {
        currentPlacement.alert = {};
        if (currentPlacement.callback) {
          currentPlacement.callback();
        }
      }, (activeFor !== undefined) ? activeFor : defaultTimeOut);

    },

    /* close alert */
    closeAlert: function (id) {
      var placement = this.getCurrent(id);
      placement.alert = {};
      timeout.cancel(placement.promise);
      if (placement.callback){
        placement.callback();
      }
    },

    clearAll: function () {
      _.each(placements, function(placement) {
        placement.alert = {};
        timeout.cancel(placement.promise);
      });
    },

    /* clear alert */
    clear: function (id) {
      if (id) {
        var current = this.getCurrent(id);
        if(!current){
          return;
        }
        current.alert = {};
        timeout.cancel(current.promise);
      } else {
        this.clearAll();
      }
      
    }

  };

}]);