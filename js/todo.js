var app = angular.module("app", []);

app.controller("TodoCtrl", function ($scope) {
    var addBy               = 16;
    $scope.total            = 4 + addBy;
});

app.directive("pagetitle", function () {
   return {
       restrict: "A",
       link: function () {
           alert('The total number is: ');
       }
   }
});

