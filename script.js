var app = angular.module('app',[]);

app.controller('controller', function() {
    this.value = true;
    this.toggle = function() {
      this.value = !this.value;
  };
 });
 
