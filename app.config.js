angular.module('bravissimoExampleApp')
.config(['$routeProvider', 
function configFunction( $routeProvider){
        $routeProvider
        .when('/', {
          template: '<user-login></user-login>'
        })
        .when('/users', {
          template: '<user-list></user-list>'
        })
        .otherwise({redirectTo:'/'});
}]); 