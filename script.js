var app = angular.module('app',[]);

app.controller('controller', function() {
    this.value1 = true;
    this.value2 = false;
    this.toggle = function(item) {
      if (item===1 || item===3) {
        this.value1 = !this.value1;
      }
      if (item===2 || item===3) {
        this.value2 = !this.value2;
      }
  };
 });
 
