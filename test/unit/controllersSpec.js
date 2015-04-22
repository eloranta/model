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
  
  var round = function(value) {
    return Math.round(1000 * value) / 1000;
  };
 
  describe('LocatorController', function(){
    var scope, ctrl;

    beforeEach(inject(function($rootScope, $controller) {
      scope = $rootScope.$new();
      ctrl = $controller('LocatorController', {$scope: scope});
    }));

    it('testing locator to longitude transformation', function() {
       scope.grid = "AA00aa";
       expect(scope.toLongitude()).toEqualData(round(-180+2/48));
       scope.grid = "jj00aa";
       expect(scope.toLongitude()).toEqualData(round(2/48));
       scope.grid = "rr00aa";
       expect(scope.toLongitude()).toEqualData(round(160 + 2/48));

       scope.grid = "aa99aa";
       expect(scope.toLongitude()).toEqualData(round(-162 + 2/48));
       scope.grid = "jj99aa";
       expect(scope.toLongitude()).toEqualData(round(18 + 2/48));
       scope.grid = "rr99aa";
       expect(scope.toLongitude()).toEqualData(round(178 + 2/48));
       
       scope.grid = "aa00xx";
       expect(scope.toLongitude()).toEqualData(round(-180 + 2*23/24 + 2/48));
       scope.grid = "jj00xx";
       expect(scope.toLongitude()).toEqualData(round(2*23/24 + 2/48));
       scope.grid = "rr00xx";
       expect(scope.toLongitude()).toEqualData(round(160 + 2*23/24 + 2/48));
    });
    
    it('testing locator to latitude transformation', function() {
       scope.grid = "AA00aa";
       expect(scope.toLatitude()).toEqualData(round(-90 + 1/48));
       scope.grid = "JJ00aa";
       expect(scope.toLatitude()).toEqualData(round(0 + 1/48));
       scope.grid = "RR00aa";
       expect(scope.toLatitude()).toEqualData(round(80 + 1/48));

       scope.grid = "AA99aa";
       expect(scope.toLatitude()).toEqualData(round(-81 + 1/48));
       scope.grid = "JJ99aa";
       expect(scope.toLatitude()).toEqualData(round(9 + 1/48));
       scope.grid = "RR99aa";
       expect(scope.toLatitude()).toEqualData(round(89 + 1/48));
       
       scope.grid = "AA00xx";
       expect(scope.toLatitude()).toEqualData(round(-90 + 23/24 + 1/48));
       scope.grid = "JJ00xx";
       expect(scope.toLatitude()).toEqualData(round(23/24 + 1/48));
       scope.grid = "RR00xx";
       expect(scope.toLatitude()).toEqualData(round(80 + 23/24 + 1/48));
    });
  });
});
