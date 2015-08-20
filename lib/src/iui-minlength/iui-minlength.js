/*doc
---
title: iui-minlength
name: iui-minlength
category: directives
---
Angular's minlength directive does not $observe or $eval the value of ngMinlength in Angular 1.2

```html_example
<div class="form-group" ng-form name="minlengthExample">
  <input 
    class="form-control"
    aria-label="Text field 1"
    placeholder="This field has 10 character minlength" 
    type="text" 
    ng-model="iuiTextField" 
    iui-minlength="10">
  <p ng-show="minlengthExample.textField1.$error.minlength">Field must contain 10 characters</p>
</div>
```
*/


angular.module('iui.minlength', [])
.directive('iuiMinlength',function(){
  return {
    require: 'ngModel',
    link: function(scope,elm,attr,ngModel){

      var minlength = 0;

      var minLengthValidator = function(value){     
        var validity = ngModel.$isEmpty(value) || value.length >= minlength;
        ngModel.$setValidity('minlength',  validity);
        return validity ? value : undefined;
      };

      attr.$observe('iuiMinlength', function(val){
         minlength = parseInt(val,10);
         minLengthValidator(ngModel.$viewValue);
      });


      ngModel.$parsers.push(minLengthValidator);
      ngModel.$formatters.push(minLengthValidator);
    } 
  };
});