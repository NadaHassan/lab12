var app= angular.module('myModule');

app.controller('displayController', function($scope, myService){
  var pleaseWork = myService.valueSetter();
  $scope.name = pleaseWork.name;
  $scope.age = pleaseWork.age;
  $scope.state = pleaseWork.state;
  $scope.kids = pleaseWork.kids;
  $scope.word = pleaseWork.word;
  $scope.pos = pleaseWork.pos;
  $scope.cat = pleaseWork.cat;


});
