    angular.module('Locator', [])
      .controller('LocatorController', ['$scope', function($scope) {
        $scope.grid = "KP11mk";
        $scope.pattern  = /^[A-Ra-r][A-Ra-r][0-9][0-9][A-Xa-x][A-Xa-x]$/;
        $scope.longitude = 0.0;
        $scope.latitude = 0.0

        $scope.toLongitude = function() {
            var grid = $scope.grid.toUpperCase();
            var temp = [];
            temp[0] = grid[0].charCodeAt() - 65;
            temp[1] = grid[1].charCodeAt() - 65;
            temp[2] = grid[2].charCodeAt() - 48;
            temp[3] = grid[3].charCodeAt() - 48;
            temp[4] = grid[4].charCodeAt() - 65;
            temp[5] = grid[5].charCodeAt() - 65;

            var field = 20 * temp[0] - 180 ;
            if (field < -180) {
                field += 360;
            }
            var grid = 2 * temp[2];
            var subgrid = (5 * temp[4]) / 60;
            var longitude = field - grid //- subgrid;
            console.log(longitude);  
            
            field = 10 * temp[1] - 90;
            grid = temp[3];
            subgrid = (2.5 * temp[5]) / 60;
            latitude = field + grid //+ subgrid;
            console.log(latitude);  
        }
      }]);
