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

app.directive("error", function ($rootScope) {
    //check to see if we can pull this out to somewhere else
    return {
        restrict: "E",
        template: '<div class="alert-box alert" ng-show="isError">Error!</div>',
        link: function (scope) {
             $rootScope.$on("$routeChangeError", function (event, current, previous, rejection) {
                 scope.isError = true;
             })
        }
    }
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
        defer.reject('Your network is down'); //change to resolve so it works
    }, 500); // will fire after 2 seconds
    return defer.promise;
};