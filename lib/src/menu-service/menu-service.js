/*

Service to update menus in routes.json file

*/

angular.module('iui.menuService', [])
.factory('MenuService',['$q', function MenuServiceFactory($q) {
  'use strict';
  var deferred = $q.defer();
  return {
    menus: deferred.promise,
    setMenus: function(menus) {
      deferred.resolve(menus);
    },
    getMenus: function() {
      return this.menus;
    },
    // gets the moduleTitle based on the moduleInstanceId
    getModuleTitle: function (moduleInstanceId) {
      return this.getMenus().then(function (menus) {
        if (menus.navigation) {
          return _.findWhere(menus.navigation, {ModuleInstanceId: moduleInstanceId}).Name;
        }
      });
    },
    // updates the app.routes populated from the routes.json file with proper titles for each module
    updateRouteTitles: function (menus) {
      _.each(app.routes, function (route) {
        _.each(menus, function (menuItem) {
          if (menuItem.ModuleId && route.moduleId && menuItem.ModuleId.trim().toUpperCase() === route.moduleId.trim().toUpperCase()) {
            route.title = menuItem.Name;
          }
        });
      });
    }
  };
}]);
