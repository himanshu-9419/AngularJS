(function(){
    var app = angular.module("ContactApp");
    //App config is contructor function and uses AppNameSvc as dependency
    function AppConfig(AppNameSvc) {
        this.name = AppNameSvc.name;
    }
    //in this given funvtion will be called in constructor mode
    app.service("AppDataServiceSvc", AppConfig);

})