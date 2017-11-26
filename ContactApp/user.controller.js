(function(){
    var app = angular.module("ContactApp", []);
    app.controller("ContactCtrl", ngmodelFunc);
    function ngmodelFunc(UserDataSvc) {
        var self=this;
        UserDataSvc.getUsers().then(data => { self.users = data; self.selectedUser = self.users[0];console.log(data);});
        
        self.selectUser = function (index) {
            this.selectedUser = self.users[index];
        }
    }
})()