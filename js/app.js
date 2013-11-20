var app = angular.module("MyAppTutorial", []);

app.controller("MainController", function ($scope) {
    //$scope.understand = "I now understand how scope works!";

    //$scope.inputValue = "";

    $scope.eselectedPerson      = 0;
    $scope.selectedGenre        = null;
    $scope.people = [
        {
            id: 0,
            name: 'Mindi',
            music: [
                '80s Rock',
                'Old School Hip Hop',
                'Techno',
                'Progressive House'
            ],
            live: true
        },
        {
            id: 1,
            name: 'Scott Henry',
            music: [
                'Progressive House',
                'Trance'
            ],
            live: false
        },
        {
            id: 2,
            name: 'Jay',
            music: [
                'Goa Trance',
                'Progressive House',
                'Techo'
            ],
            live: false
        },
        {
            id: 3,
            name: 'Ian Bezerker',
            music: [
                'Happy Hardcore',
                'SpeedCore'
            ],
            live: true
        }
    ];

    //add new person
    $scope.newPerson = null;
    $scope.addNew = function () {
        if($scope.newPerson != null && $scope.newPerson != "") {
            $scope.people.push({
               id: $scope.people.length,
                name: $scope.newPerson,
                live: true,
                music: []
            });
        }
    }
});
