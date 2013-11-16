var app = angular.module("app", []);

app.controller("RoomCtrl", function () {
   this.openDoor = function () {
       alert('creak');
   }
   
   this.buttonTitle = "I'm a button";
    this.foo = "foobar";
});

app.controller("OtherCtrl", function () {
   this.buttonTitle = "Other Button";
    this.foo = "beyond all recognition";
});