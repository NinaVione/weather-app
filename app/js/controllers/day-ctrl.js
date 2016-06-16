angular.module('app').controller('DayCtrl', function ($scope, WeatherService) {

  $scope.getWeatherForecast = function () {
    WeatherService.getForecast($scope.$parent.city).then(function (data) {
      $scope.responseData = data.list[$scope.number];
      $scope.responseInfo = data.city;
    });
  };

  $scope.$on('change-city', $scope.getWeatherForecast);
  $scope.getWeatherForecast();

  $scope.iconBaseUrl = 'http://openweathermap.org/img/w/';

  $scope.getIconImageUrl = function (iconName) {
    return (iconName ? $scope.iconBaseUrl + iconName + '.png' : '');
  };

  $scope.parseDate = function (time) {
    return new Date(time * 1000);
  };

});
