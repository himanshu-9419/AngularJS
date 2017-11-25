var module=angular.module("ClockApp",[]);
module.controller("Clock",Clock);
        
function Clock($scope){
    var date = new Date();   
    $scope.time=date.toTimeString();
    $scope.userName="Himanshu Arora";
    $scope.updateTimePeriod=function(){
        var date = new Date();
        $scope.time = date.toTimeString();
    }
}
