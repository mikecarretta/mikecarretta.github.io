'use strict';
/**
*  Module
*
* Description
*/
angular.module('gitApp.services', [])
.factory('GitHubApiRepos', ['$http', function($http) {
  return {
    getGitHubUser: function() {
      return $http({
        url: 'https://api.github.com/users/mikecarretta/repos'
      })
    }
  };
}])
.factory('myHttpInterceptor', ['$q', '$window', function ($q, $window) {
  return function (promise) {
    return promise.then(function (response) {
      $("#spinner").hide();
      return response;
    }, function (response) {
      $("#spinner").hide();
      return $q.reject(response);
    });
  };
}]);