var app = angular.module("app", []);
app.config(function ($routeProvider){

});

app.controller("AppCtrl", function ($scope, $route) {
   $route.routes["/"] = {
       templateUrl: "app.html",
       controller: "AppCtrl"
   } 
   
   $scope.model = {
       message: "Does this work?"
   }
});