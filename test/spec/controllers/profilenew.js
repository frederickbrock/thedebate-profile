'use strict';

describe('Controller: ProfilenewCtrl', function () {

  // load the controller's module
  beforeEach(module('publicApp'));

  var ProfilenewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProfilenewCtrl = $controller('ProfilenewCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
