angular.module('app').controller('WeatherCtrl', function ($scope, WeatherService) {

  $scope.citiesToAdd = [
    {
      "name": "Minsk",
      "value": "Minsk,by"
    },
    {
      "name": "San Dimas",
      "value": "San Dimas,us"
    },
    {
      "name": "New York",
      "value": "New York,us"
    },
    {
      "name": "Provo",
      "value": "Provo,us"
    }
  ];

  $scope.cities = WeatherService.getCities();

  $scope.$watch('city', function () {
    $scope.$broadcast('change-city');
  });

  $scope.init = function () {
    $scope.city = WeatherService.getCities()[0].value;
  };

  $scope.initCity = function () {
    $scope.cityAdd = JSON.stringify($scope.citiesToAdd[0]);
  };


  $scope.addCity = function (city) {
    WeatherService.setCity(city);
    $scope.cities = WeatherService.getCities();
  };

});