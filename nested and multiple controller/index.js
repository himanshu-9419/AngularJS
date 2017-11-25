var app= angular.module("NestedController",[]);

app.controller("ctrl1",ctrl1);
app.controller("ctrl2",ctrl2);

function ctrl1($scope){
    $scope.testProp="ctrl1";
}

function ctrl2($scope){
    //$scope.testProp="ctrl2";
}