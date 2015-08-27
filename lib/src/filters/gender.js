// 
// Gender filter
// Author: morgan.stone
//

iuiFiltersModule.filter('gender', [function () {
  'use strict';
  return function (input) {
    var parsedInput = parseInt(input);
    if (parsedInput === 2) {
      return 'Male';
    } else if (parsedInput === 3) {
      return 'Female';
    } else {
      return 'Unknown';
    }
  };
}]);