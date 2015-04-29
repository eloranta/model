angular.module('Locator', [])
  .controller('LocatorController', ['$scope', function($scope) {
    $scope.grid = "KP11mk";
    $scope.pattern  = /^[A-Ra-r][A-Ra-r][0-9][0-9][A-Xa-x][A-Xa-x]$/;
    $scope.longitude = 0;
    $scope.latitude = 0

    $scope.toLongitude = function() {
        var grid = $scope.grid.toUpperCase();
        var temp = [];
        temp[0] = grid[0].charCodeAt() - 65;
        temp[2] = grid[2].charCodeAt() - 48;
        temp[4] = grid[4].charCodeAt() - 65;

        var field = 20 * temp[0] - 180 ;
        var grid = 2 * temp[2];
        var subGrid = (5 * temp[4]) / 60;
        var halfSubGrid = 1/24;
        var longitude = field + grid + subGrid + halfSubGrid;
        return Math.round(longitude * 1000) / 1000;
    };
    $scope.toLatitude = function() {
        var grid = $scope.grid.toUpperCase();
        var temp = [];
        temp[1] = grid[1].charCodeAt() - 65;
        temp[3] = grid[3].charCodeAt() - 48;
        temp[5] = grid[5].charCodeAt() - 65;

        var field = 10 * temp[1] - 90;
        var grid = temp[3];
        var subGrid = (2.5 * temp[5]) / 60;
        var halfSubGrid = 1/48;
        latitude = field + grid + subGrid + halfSubGrid;
        return Math.round(latitude * 1000) / 1000;
    };
  }]);

  