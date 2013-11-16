var app = angular.module("app", []);

app.factory("game", function () {
    return {
        title: "WarCraft"
    }
});

app.controller("AppCtrl", function ($scope, $injector) {
   $injector.invoke(function (game) {
       $scope.title = game.title;
        alert(game.title);
   });
});