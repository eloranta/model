var app = angular.module('app',[]);

app.controller('controller', function($scope) {
  $scope.values = new Array(40);
  for (i = 0; i < $scope.values.length; i++) {
    $scope.values[i] = Math.random()<0.5;
  }    
});
 