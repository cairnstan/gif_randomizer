var app = angular.module('gifApp', []);
console.log('We\'ve got angular!' );
app.controller('MainController', function($scope, $http){

  $scope.getGiphy = function(){
    console.log('Let\'s get giphy!')
    $http.get("http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC").then(function(response){
      $scope.gif = response.data.data;
      console.log($scope.gif);

    });


  }
})
