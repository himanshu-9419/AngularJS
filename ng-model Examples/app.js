var app= angular.module("ngModelExample",[]);
app.controller("ExampleController",ngmodelFunc);

function ngmodelFunc($scope){
    $scope.onValueChange=function(){
        console.log($scope.name);
    }
}