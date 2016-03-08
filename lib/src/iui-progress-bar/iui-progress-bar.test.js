(function () {
  'use strict';

  describe('iui-progress-bar directive', function () {
    var scope,
      element,
      el,
      listElement,
      listItemElements;
    beforeEach(function () {
      module('app');
      module('iui.progressBar');
      module('templates');
    });
    beforeEach(inject(function ($compile, $rootScope) {
      scope = $rootScope.$new();
      
      scope.goalProgressOptions = {
        minValue: '',
        maxValue: '255',
        hideLabels: true,
        bars: [
          {
            label: 'Goal 1',
            currentValue: 13.756
          },
          {
            label: 'Goal 2',
            currentValue: 54.34,
            barStyle: 'progress-bar-success'
          },
          {
            label: 'Goal 3',
            currentValue: 70
          }
        ]
      };
      
      element = angular.element('<div><iui-progress-bar progress-bar-options="goalProgressOptions"></iui-progress-bar></div>');
      el = $compile(element)(scope);
      scope.$digest();
      listItemElements = el[0].querySelectorAll('.progress-bar');
    }));
    
    it('Has 3 Progress Bars', function () {
      expect(listItemElements.length).toBe(3);
    });
    it('Does not show the labels', function () {
      var firstItemKey = listItemElements[0].querySelectorAll('.progress-bar .sr-only');
      expect(firstItemKey.length).toBe(1);
    });
    it('The width of the second progress bar is 21.30980392156863%', function () {
      console.log(listItemElements[1]);
      expect(listItemElements[1].css('width')).toBe('21.30980392156863%');
    });
    
    
    
  });
}(window.app));