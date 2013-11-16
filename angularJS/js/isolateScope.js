var app = angular.module("phoneApp", []);

app.controller("AppCtrl", function ($scope) {
    $scope.callHome = function (message) {
        alert('call home: ' + message);
    };
});

app.directive("phone", function () {
    return {
        scope: {
            dial: "&"
        },
        template: '<input type="text" ng-model="value"><div class="button" ng-click="dial({message:value})">Call Home</div>'
    };
});

/*

var app = angular.module('drinkApp', []);

app.controller("AppCtrl", function ($scope) {
    $scope.ctrlFlavor = "blackberry"
});

app.directive("drink", function () {
    return {
        scope: {
            flavor: '='
        },
        template: '<input type="text" ng-model="flavor">'
    }
});

/** ISOLATE WITH @
app.controller("AppCtrl", function ($scope) {
    $scope.ctrlFlavor   = "orange"
});

app.directive("drink", function () {
    return {
        scope: {
            flavor: '@'
        },
        template: '<div>{{flavor}}</div>'
    }
});
**/


/** 
app.controller("ChoreCtrl", function ($scope) {
    $scope.logChore = function (chore) {
        alert(chore + ' is done');
    };
});

app.directive("kid", function () {
    return {
        restrict: "E",
        scope: {
            done: "&"
        },
        template: '<input type="text" ng-model="chore"> ' +
        '{{chore}}' +
        '<div class="button" ng-click="done({chore:chore})">I\'m done</div>'
    };
});
**/