var app = angular.module('app',[]);

app.controller('controller', function($scope) {
  $scope.values = new Array(40); 
  for (i = 0; i < $scope.values.length; i++) {
    var val = Math.floor((Math.random() * 2));
    if (val === 0) {
      $scope.values[i] = false;
    } else {
      $scope.values[i] = true;
    }
  }    
});
 