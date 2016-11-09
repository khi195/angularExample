// Code goes here
var app = angular. module('bravissimoExampleApp', []);

app.controller('submitForm', function($scope){

$scope.submit = function(isValid){
console.log(this.submitUser);
console.log(this.submitEmail);
console.log(this.submitMessage);
if(isValid){
    alert('Good Job')
}
else{
    alert('Form failed')
}

}

});