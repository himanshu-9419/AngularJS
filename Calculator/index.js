var app= angular.module("CalculatorApp",[]);
app.controller("CalculatorCtrl",Calculator);

function Calculator($scope) {
    $scope.operation="+";
    $scope.result="0";
    $scope.calculate=function(){
        console.log("here");
        debugger;
        var a=$scope.number1;
        var b=$scope.number2;
        
        switch ($scope.operation) {
            case "+":
                $scope.result= a + b;
                break;
            case "-":
                $scope.result = a - b;
                break;
            case "*":
                $scope.result = a * b;
                break;
            case "/":
                $scope.result = a / b;
                break;
            default:
                break;
        }
    }
}