var app= angular.module("NestedController",[]);

app.controller("ctrl1",ctrl1);
app.controller("ctrl2",ctrl2);

function ctrl1(){
    //var this=$scope //angular do something like this
    this.testProp="ctrl1";
}

function ctrl2(){
    this.testProp="ctrl2";
}