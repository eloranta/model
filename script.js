var app = angular.module('app',[]);

app.controller('controller', function($scope) {
    $scope.state = true;
    $scope.toggle = function() {
      $scope.state = !$scope.state;
  };
 });
 
