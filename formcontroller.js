var app = angular.module('myModule');

app.controller('formController', ['$scope' 'myService', function($scope, myService){
$scope.addValues= function() {
  var addedValues = {
    name: $scope.name,
    age: $scope.age,
    kids: $scope.kids,
    state: $scope.state,
    cat: $scope.cat,
    word: $scope.word,
    pos: $scope.pos
  }
  myService.valueGetter(addedValues);



}
});
