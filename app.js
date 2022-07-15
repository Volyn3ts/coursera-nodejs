(function() {
'use strict';

angular.module('MainApp', [])
.controller('MainController', MainController);

MainController.$inject = ['$scope'];
function MainController($scope) {
  $scope.text = "";
  $scope.result = "";

  $scope.ButtonClicked = function () {
    var words = $scope.text.split(',');
    console.log(words.length);
    if (words.length <= 3 && words.length > 1){
      $scope.result = "Enjoy!";
    } else if (words.length > 3){
      $scope.result = "Too much!";
    } else {
      $scope.result = "Please enter data first";
    }
  };
};

})();