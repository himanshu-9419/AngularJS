(function(){
    var app = angular.module("ContactApp", []);
    app.controller("ContactCtrl", ngmodelFunc);
    function ngmodelFunc(UserDataSvc) {
        this.users=UserDataSvc.users;
        this.selectedUser = this.users[0];
        this.selectUser = function (index) {
            this.selectedUser = this.users[index];
        }
    }
})()