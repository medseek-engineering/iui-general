/*

Directive override to allow for scrolling the popup when using the keyboard to tab through the list.

*/

angular.module('', ['ui-bootstrap']) //what goes here for the module?
.directive('typeahead', function() {
  'use strict';
  return {
    restrict: 'A',
    priority: 1000, // Let's ensure AngularUI Typeahead directive gets initialized first!
    link: function(scope, element) {
      // Bind keyboard events: arrows up(38) / down(40)
      element.bind('keydown', function(evt) {
        if (evt.which === 38 || evt.which === 40) {
          // Broadcast a possible change of the currently active option:
          // (Note that we could pass the activeIdx value as event data but AngularUI Typeahead directive
          //  has its own local scope which makes it hard to retrieve, see:
          //  https://github.com/angular-ui/bootstrap/blob/7b7039b4d94074987fa405ee1174cfe7f561320e/src/typeahead/typeahead.js#L104)
          scope.$broadcast('TypeaheadActiveChanged');
        }
      });
    }
  };
}).directive('typeaheadPopup', function() {
  'use strict';
  return {
    restrict: 'EA',
    priority: 1000, // Let's ensure AngularUI Typeahead directive gets initialized first!
    link: function(scope, element, attrs) {
      var unregisterFn = scope.$on('TypeaheadActiveChanged', function() {
        if (scope.activeIdx !== -1) {
          // Retrieve active Typeahead option:
          var option = document.querySelector('#' + attrs.id + '-option-' + scope.activeIdx);
          // Make sure option is visible:
          option.scrollIntoView(false);
        }
      });
      // Ensure listener is unregistered when $destroy event is fired:
      scope.$on('$destroy', unregisterFn);
    }
  };
});
