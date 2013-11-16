var app = angular.module("app", []);

app.config(function ($routeProvider) {
   $routeProvider.when('/',
        {
            templateUrl: "app.html",
            controller: "ViewCtrl",
            resolve: {
                loadData: viewCtrl.loadData
            }
        }) 
});

app.controller("AppCtrl", function ($rootScope) {
    $rootScope.$on("$routeChangeError", function (event, current, previous, rejection) {
        console.log(event);
    })
});

var viewCtrl = app.controller("ViewCtrl", function ($scope, $route) {
    console.log($route);
   $scope.model = {
       message: "You promised!"
   } 
});

viewCtrl.loadData = function ($q, $timeout) {
    //q library is the promise library, timeout sets a time below after function
    var defer       = $q.defer();
    $timeout(function () {
        defer.reject('Your network is down');
    }, 500); // will fire after 2 seconds
    return defer.promise;
};