angular.module('app').service('WeatherService', function ($http) {

  this.cities = [
    {
      "name": "London",
      "value": "London,uk"
    },
    {
      "name": "Glasgow",
      "value": "Glasgow,uk"
    },
    {
      "name": "Gomel",
      "value": "Homyel,by"
    }
  ];

  this.getCities = function () {
    return this.cities;
  };

  this.setCity = function (city) {
    var cityObject = JSON.parse(city);
    var found = false;
    for(var i = 0; i < this.cities.length; i++) {
      if (this.cities[i].name == cityObject.name) {
        found = true;
      }      
    }
    if (!found) {
     this.cities.push(cityObject); 
    }
  };

  this.getForecast = function (city) {
    var apiKey = 'f4b839dfe9ccdc02485bf7dd4f27349b';
    var apiUrl = 'http://api.openweathermap.org/data/2.5/';
    var promise = $http.get(apiUrl + 'forecast/daily?q=' + city + '&cnt=4&units=metric&APPID=' + apiKey)
    .then(function (response) {
      var responseData = angular.fromJson(response.data);
      return responseData;
    });
    return promise;
  };

}); 