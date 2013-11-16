var app = angular.module("app", []);

app.config(function ($routeProvider) {
   $routeProvider.when('/',
        {
            templateURL: "app.html",
            controller: "AppCtrl"
        }
    );
    
});

app.controller("AppCtrl", function ($scope) {
   $scope.model = {
       message: "<div>View: {{model.message}}</div>"
   } 
});