(function () {
  'use strict';

  describe('MenuService', function () {
    var MenuService, $rootScope;
    var menuData = {
      navigation: [
        {
          ModuleId: 'Iframe',
          Name: 'IFrame1 Custom',
          PageTarget: 'Same Page',
          ModuleInstanceId: '43',
          Route: '/content/43/IFrame1 Custom',
          isUserNav: true,
          Permission: [
            '*'
          ],
        },
        {
          ModuleId: 'MessageCenter',
          Name: 'Message Center',
          PageTarget: 'Same Page',
          ModuleInstanceId: '14',
          Icon: 'messages',
          Route: '/message-center',
          isUserNav: true,
          Permission: [
            'message-center.messages.view'
          ],
        }
      ]
    };

    beforeEach(function () {
      module('app');
      module('iui.menuService');
      inject(function(_MenuService_, _$rootScope_) {
        MenuService = _MenuService_;
        $rootScope = _$rootScope_;
      });
      angular.mock.inject(function() {
        app.routes = {
          '/content/:moduleInstanceId/:title': {
            title: 'Content',
            layout: 'layouts/master',
            theme: 'themes/default',
            moduleId: 'iframe',
            inPrimaryNav: true,
          },
          '/message-center': {
            title: 'The Message Center',
            layout: 'layouts/master',
            theme: 'themes/default',
            moduleId: 'Messagecenter',
            inPrimaryNav: true,
          }
        };
      });
    });

    it('should be able to set and get the menu', function () {
      var result;
      MenuService.setMenus(menuData);
      MenuService.getMenus().then(function(menus) {
        result = menus;
      });
      $rootScope.$apply();
      expect(result).toEqual(menuData);
    });

    it('should be able to get the module title by passing in a moduleInstanceId', function () {
      var result;
      MenuService.setMenus(menuData);
      MenuService.getModuleTitle('43').then(function(moduleTitle) {
        result = moduleTitle;
      });
      $rootScope.$apply();
      expect(result).toEqual('IFrame1 Custom');
    });

    it('should update the route titles in app.routes', function () {
      var result;
      MenuService.updateRouteTitles(menuData.navigation);
      result = app.routes['/message-center'].title;
      expect(result).toEqual('Message Center');
    });

  });
})(window.app);