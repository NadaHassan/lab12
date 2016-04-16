var app = angular.module('myModule', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
    .when('/form',
  {
    controller: 'formController',
    templateUrl: 'form.html'
  })
    .when('/display',
  {
    controller: 'displayController',
    templateUrl: 'display.html'
  })
    .otherwise({redirectTo: '/'});
});
