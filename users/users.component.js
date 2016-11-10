var app = angular.module('users');

app.component('userList',{
template:'Test data {{$ctrl.details[1].username}}',
controller: function detailsController($scope){
this.details = [
        {
          username: 'Tom123',
          email: 'tom@gmail.com'
        }, {
          username: 'Jerry789',
          email: 'Jerry@Outlook.com'
        }, {
          username: 'Homer_simpson',
          email: 'homer.simpson@yahoo.com'
        },{
          username: 'BartSimpson_1982',
          email: 'B.simp@Gmail.com'
        },{
          username: 'HarryP',
          email: 'Harry_Potter@AOL.com'
        }
      ];
}
})