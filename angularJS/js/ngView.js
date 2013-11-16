var app = angular.module("app", []);

app.config(function ($routeProvider) {
   $routeProvider.when('/',
        {
            templateUrl: "app.html",
            controller: "AppCtrl"
        }) 
});

app.controller("AppCtrl", function ($scope, $q) {
    var defer = $q.defer();
    
    defer.promise
        .then(function (weapon) {
            alert("I promised I'd show up with a " + weapon + "!");
            return "bow"
    })
    .then(function (weapon) {
        alert('Me too' + weapon);
        return "axe"
    })
    .then(function (weapon) {
        alert("and I" + weapon);
    })
    
    defer.resolve("sword");
    
   $scope.model = {
       message: "This is my app!"
   } 
});