// Code goes here
var app = angular. module('bravissimoExampleApp', []);

app.controller('submitForm', function($scope){

$scope.submit = function(){
console.log(this.submitUser);
console.log(this.submitEmail);
console.log(this.submitMessage);
}

});