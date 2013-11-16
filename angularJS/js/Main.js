var myApp = angular.module('myApp', []);

myApp.factory('DD', function () {
    var DD = {};
    DD.cast = [
        {
            name: 'Dorain Delmontez',
            origin: 'Earth'
        },
        {
            name: 'Alicia Wheaters',
            origin: 'Earth'
        },
        {
            name: 'Finnegan',
            origin: 'The Dea'
        }
    ];
    return DD;
});
              
function DDCtrl($scope, DD) {
    $scope.dd = DD;
};

/*** start ***/
/**
myApp.factory('Data', function () {
	return {message: "I'm data from a service."};
});

myApp.filter('reverse', function () {
    return function () {
        return 'DCBA';
    };
});

function FirstCtrl ($scope, Data) {
	$scope.data		= Data;
};

function SecondCtrl($scope, Data) {
	$scope.data		= Data;
	
	$scope.reversedMessage = function(message){
		return message.split("").reverse().join("");
	};
};
**/