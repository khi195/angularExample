// Code goes here
var app = angular.module('form');

app.controller('submitForm', function($scope) {
  $scope.schema = {
  "type": "object",
  "title": "Comment",
  "properties": {
    "name": {
      "title": "Name",
      "type": "string"
    },
    "email": {
      "title": "Email",
      "type": "string",
      "pattern": "^\\S+@\\S+$",
      "description": "Email will be used for evil."
    },
    "comment": {
      "title": "Comment",
      "type": "string",
      "maxLength": 20,
      "validationMessage": "Don't be greedy!"
    }
  },
  "required": [
    "name",
    "email",
    "comment"
  ]
};

  $scope.form = [
  "name",
  "email",
  {
    "key": "comment",
    "type": "textarea",
    "placeholder": "Make a comment"
  },
  {
    "type": "submit",
    "style": "btn-info",
    "title": "Submit"
  }
];

  $scope.model = {};
});

app.component('greetUser',{
template: 'Hello, {{$ctrl.user}}',
controller: function GreetUserController(){
    this.user = "world";
}


});