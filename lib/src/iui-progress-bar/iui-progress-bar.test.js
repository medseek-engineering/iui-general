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
        hideDisplayName: true,
        showPercent: false,
        roundTo: 2
      };
      scope.goalDisplayFields = [
        {
          displayName: 'Goal 1',
          field: 'hairLength'
        },
        {
          displayName: 'Goal 2',
          field: 'bmi',
          barClass: 'progress-bar-success'
        },
        {
          displayName: 'Goal 3',
          field: 'weight'
        }
      ];
      scope.bars = {
        hairLength: 13.756,
        bmi: 54.34,
        weight: 70
      };
      
      element = angular.element('<div><iui-progress-bar bar-data="bars" bar-options="goalProgressOptions" display-fields="goalDisplayFields"></iui-progress-bar></div>');
      el = $compile(element)(scope);
      scope.$digest();
      barElements = el[0].querySelectorAll('.progress-bar');
    }));
    
    it('Has 3 Progress Bars', function () {
      expect(barElements.length).toBe(3);
    });
    it('Does not show the display names or percents', function () {
      var firstItemKey = barElements[0].querySelectorAll('.progress-bar .sr-only');
      expect(firstItemKey.length).toBe(1);
    });
    it('The width of the second progress bar is 21.30980392156863%', function () {
      expect(barElements[1].style.width).toBe('21.3098%');
    });
    
    
    
  });
}(window.app));