'use strict';

/* jasmine specs for controllers go here */
describe('Locator controllers', function() {

  beforeEach(function(){
    this.addMatchers({
      toEqualData: function(expected) {
        return angular.equals(this.actual, expected);
      }
    });
  });

  beforeEach(module('Locator'));

  describe('LocatorController', function(){
    var scope, ctrl;

    beforeEach(inject(function($rootScope, $controller) {
      scope = $rootScope.$new();
      ctrl = $controller('LocatorController', {$scope: scope});
    }));

    it('testing locator to longitude transformation', function() {
       scope.grid = "AA00aa";
       expect(scope.toLongitude()).toEqualData(-180+1/24);
       scope.grid = "JJ00aa";
       expect(scope.toLongitude()).toEqualData(1/24);
       scope.grid = "RR00aa";
       expect(scope.toLongitude()).toEqualData(160 + 1/24);

       scope.grid = "AA99aa";
       expect(scope.toLongitude()).toEqualData(-162 + 1/24);
       scope.grid = "JJ99aa";
       expect(scope.toLongitude()).toEqualData(18 + 1/24);
       scope.grid = "RR99aa";
       expect(scope.toLongitude()).toEqualData(178 + 1/24);
       
       scope.grid = "AA00xx";
       expect(scope.toLongitude()).toEqualData(-178.08333333333334 + 1/24);  // TODO:
       scope.grid = "JJ00xx";
       expect(scope.toLongitude()).toEqualData(1.9166666666666667 + 1/24);
       scope.grid = "RR00xx";
       expect(scope.toLongitude()).toEqualData(161.91666666666666 + 1/24);
    });
    
    it('testing locator to latitude transformation', function() {
       scope.grid = "AA00aa";
       expect(scope.toLatitude()).toEqualData(-90 + 1/48);
       scope.grid = "JJ00aa";
       expect(scope.toLatitude()).toEqualData(0 + 1/48);
       scope.grid = "RR00aa";
       expect(scope.toLatitude()).toEqualData(80 + 1/48);

       scope.grid = "AA99aa";
       expect(scope.toLatitude()).toEqualData(-81 + 1/48);
       scope.grid = "JJ99aa";
       expect(scope.toLatitude()).toEqualData(9 + 1/48);
       scope.grid = "RR99aa";
       expect(scope.toLatitude()).toEqualData(89 + 1/48);
       
       scope.grid = "AA00xx";
       expect(scope.toLatitude()).toEqualData(-89.04166666666667 + 1/48);  // TODO:
       scope.grid = "JJ00xx";
       expect(scope.toLatitude()).toEqualData(0.9583333333333334 + 1/48);
       scope.grid = "RR00xx";
       expect(scope.toLatitude()).toEqualData(80.95833333333333 + 1/48);
    });
  });
});
