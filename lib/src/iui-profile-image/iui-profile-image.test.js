(function () {
  'use strict';

  describe('iui-profile-image directive', function () {
    var scope,
      element,
      el;
    beforeEach(function () {
      module('app');
      module('iui.profileImage');
      module('templates');
    });
    beforeEach(inject(function ($compile, $rootScope) {
      scope = $rootScope.$new();
      scope.profile = {
        gender: 2,
        image: 'iVBOr8PLeFvBw/ZE8acptvy/TkSd672rLA4AAAAASUVORK5CYII='
      };
      scope.displayAsSquare = false;
      element = angular.element('<iui-profile-image iui-image="profile.image" iui-gender="profile.gender" iui-is-square="displayAsSquare"></iui-profile-image>');
      el = $compile(element)(scope);
      scope.$digest();

    }));
    it('should have \'profile_male\' class when the gender is Male', function () {
      expect(el.find('.profile-image-wrap').hasClass('profile_male')).toBe(true);
    });
    it('should have \'profile_female\' class when the gender is Female', function () {
      scope.profile.gender = 3;
      scope.$digest();
      expect(el.find('.profile-image-wrap').hasClass('profile_female')).toBe(true);
    });
    it('should default to being round', function () {
      expect(el.find('.profile-image-wrap').hasClass('profile_rounded')).toBe(true);
      expect(el.find('.profile-image-wrap').hasClass('profile_square')).toBe(false);
    });
    it('should be able to be square', function () {
      scope.displayAsSquare = true;
      scope.$digest();
      expect(el.find('.profile-image-wrap').hasClass('profile_square')).toBe(true);
      expect(el.find('.profile-image-wrap').hasClass('profile_rounded')).toBe(false);
    });
    it('should display a photo when available', function () {
      expect(el.find('.profile_image')[0].style['background-image'])
        .toBe('url(\"data\:image\/jpeg\;base64\,iVBOr8PLeFvBw\/ZE8acptvy\/TkSd672rLA4AAAAASUVORK5CYII\=\")');
  
      // .profile_image is hidden when photo is undefined
      scope.profile.image = undefined;
      scope.$digest();
      expect(el.find('.profile_image').length).toBe(0);
    });
    
  });
}(window.app));
