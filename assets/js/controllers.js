'use strict';
/**
*  Module
*
* Description
*/
angular.module('gitApp.controllers', [])
.controller('GitsController', ['$scope', 'GitHubApiRepos', function($scope, GitHubApiRepos){
  $scope.gitRepos = GitHubApiRepos.getGitHubUser('mikecarretta');
}])