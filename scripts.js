(function() {
var app = angular.module("madlibApp", ["ngRoute"]); // create the module
app.config(function($routeProvider) {
    $routeProvider.when("/form", {
        templateUrl: "form.html",
        controller: "addWords"
    });
    $routeProvider.when("/paragraph", {
        templateUrl: "paragraph.html",
        controller: "getWords"
    });
    $routeProvider.otherwise({
        templateUrl: "form.html",
        // template: "Alone in the world was a little catdog."
    });

});

app.factory("madlibStore", function(){
    var madlib={};
    return{
        setMadlib: function(temp){
            madlib = temp;
        },
        getMadlib: function(){
            return madlib;
        }
    };

});



app.controller('addWords', function($scope, madlibStore){

  $scope.onclick = function(wordsToAdd){

    var madlib = $scope.data;

    // var madlib = { 
    //     animal: $scope.data.animal,
    //     direction: $scope.data.direction,

    // };
    madlibStore.setMadlib(madlib);

    location.hash = "/paragraph";
};



});

app.controller('getWords', function($scope, madlibStore){
  var madlib = madlibStore.getMadlib();


  $scope.madlib = madlib;
});

})();



