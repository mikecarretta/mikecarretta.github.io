'use strict';
/**
*  Module
*
* Description
*/
angular.module('gitApp.services', [])
.factory('GitHubApiRepos', ['$q', '$http', function($q, $http){
  var getGitHubUser = function(name) {
  var deferred = $q.defer();

  $http.get('https://api.github.com/users/' + name + '/repos')
    .success(function(data){
      deferred.resolve(data);
    })
    .error(function(){
      deferred.reject(reason);
    });
    return deferred.promise;
  };
  return {
    getGitHubUser: getGitHubUser
  }
}]).
factory('myHttpInterceptor', ['$q', '$window', function ($q, $window) {
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