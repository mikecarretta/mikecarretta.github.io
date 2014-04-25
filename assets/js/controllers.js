'use strict';
/**
*  Module
*
* Description
*/
angular.module('gitApp.controllers', [])
.controller('GitsController', ['$scope', 'GitHubApiRepos',
    function($scope, GitHubApiRepos) {
      GitHubApiRepos.getGitHubUser().success(function(data) {
        $scope.gitRepos = data;
    });
}])