/*doc
---
title: iui-input-field-highlight
name: iui-input-field-highlight
category: directives
---

This directive, iui-input-field-highlight, looks for the focus state
on various input types, and applies a bg color change to keep the
user's attention on the section. It also separates each section without
the use of borders.

```html_example
<section class="panel panel-default" iui-input-field-highlight>
  <div class="panel-body">
    <div class="form-group">
      <input 
        class="form-control"
        aria-label="Field 1"
        placeholder="Field 1" 
        type="text">
    </div>
    <div class="form-group">
      <input 
        class="form-control"
        aria-label="Field 2"
        placeholder="Field 2" 
        type="text">
    </div>
  </div>
</section>
<section class="panel panel-default" iui-input-field-highlight>
  <div class="panel-body">
    <div class="form-group">
      <input 
        class="form-control"
        aria-label="Field 3"
        placeholder="Field 3" 
        type="text">
    </div>
    <div class="form-group">
      <input 
        class="form-control"
        aria-label="Field 4"
        placeholder="Field 4" 
        type="text">
    </div>
  </div>
</section>
```
*/



angular.module('iui.inputFieldHighlight', [])
.directive('iuiInputFieldHighlight', function() {
  'use strict';
  return {
    restrict: 'A',
    scope: {},
    link: function(scope, element) {
      var sectionWrapper = element;
      var inputSearchTypes ='input, textarea, select, div, button, a, table';
      scope.$watch(function() {
        scope.allInputsSize = sectionWrapper.find(inputSearchTypes).size();
      });
      scope.$watch('allInputsSize', function(newVal) {
        var allInputs = sectionWrapper.find(inputSearchTypes);
        allInputs.on('focus', function() {
          sectionWrapper.addClass('is-highlighted');
        });
        allInputs.on('blur', function() {
          sectionWrapper.removeClass('is-highlighted');
        });
      });
    }
  };
});