'use strict';
/**
*  Module
*
* Description
*/
angular.module('gitApp', [
  'ngRoute',
  'gitApp.services',
  'gitApp.controllers'
])
.config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider) {
  $routeProvider
  .when('/', {templateUrl: 'partials/gits.html'})
  .otherwise({redirectTo: '/'});

  $httpProvider.responseInterceptors.push('myHttpInterceptor');
  var spinnerFunction = function spinnerFunction(data, headersGetter) {
    $("#spinner").show();
    return data;
  };
  $httpProvider.defaults.transformRequest.push(spinnerFunction);
}]);