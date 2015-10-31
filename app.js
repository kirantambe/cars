/**
 * Created by kiran on 31/10/15.
 */
carApp = angular.module('carApp', ['darthwade.dwLoading']);

carApp.controller('MainController', ['$scope', '$http', '$loading', function($scope, $http, $loading){
  var baseUrl = 'http://demo2589602.mockable.io/car/'
  $scope.selectedCar = {};

  $scope.selectCar = function(carName){
    $loading.start('mainContainer');
    $http.get(baseUrl + carName).then(function(response){
      $scope.selectedCar = response.data;
      $scope.selectedCar.id = carName;
      $loading.finish('mainContainer');
    }, function(response){

    });
  };
  $scope.selectCar('go');

}]);