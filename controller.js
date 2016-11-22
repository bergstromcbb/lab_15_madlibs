
var app = angular.module('madlibApp', []);

app.controller('addWords', function($scope){
  $scope.addedWord = [];

  $scope.onclick = function(wordsToAdd){
  	$scope.addedWord.push();	
  	$scope.wordToAdd = "";
  	$scope.chicken = "chicken";

  };
 });