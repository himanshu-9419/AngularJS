(function () {
    var app = angular.module("ContactApp", []);
    //factory service also support dependency injection as funcrion given is clalled by anguar
    app.factory("AppFactorySvc", function (AppNameSvc) {
        return AppNameSvc.name;
    });
})()