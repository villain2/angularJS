var app = angular.module("app", ["ngAnimate"]);

app.factory("contacts", function () {
   return [
       {"firstName": "Angelica", "lastName": "Britt", "phone": "444-555-4444"},
       {"firstName": "Alicia", "lastName": "Wheaters", "phone": "444-666-4444"},
       {"firstName": "Dorian", "lastName": "Delmontez", "phone": "444-545-4433"},
       {"firstName": "Mouth", "lastName": "Loche", "phone": "444-555-3421"},
       {"firstName": "Sharp", "lastName": "Loche", "phone": "444-555-2222"},
       {"firstName": "Echo", "lastName": "Loche", "phone": "444-555-3453"},
       {"firstName": "Cathy", "lastName": "Beattlesnips", "phone": "444-434-2422"}
   ];
});

app.controller("AppCtrl", function (contacts) {
   this.contacts            = contacts;
    this.selectedContact    = null;
    this.contactCopy        = null;
    
    this.selectedContact    = function (contact) {
        this.selectedContact        = contact;
        this.contactCopy            = angular.copy(contact);
    }
});
