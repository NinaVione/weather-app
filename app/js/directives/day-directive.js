angular.module('app').directive('day', function() {
  return {
    restrict: 'E',
    scope: { number: '=' },
    replace: true,
    controller: 'DayCtrl',
    template: '<div class="weather panel panel-primary">'+
                '<div class="panel-heading">{{parseDate(responseData.dt) | date:"fullDate"}}</div>'+
                '<div class="panel-body">'+
                  '<div>'+
                    '<p class="lead">'+
                      '<img ng-src="{{getIconImageUrl(responseData.weather[0].icon)}}" />'+
                      '{{responseData.temp.day | number:1}}&#176;C {{responseData.weather[0].main}}'+
                    '</p>'+
                    '<p>'+
                      '{{responseData.weather[0].description}}&nbsp;&#126;&nbsp;'+
                      'High: {{responseData.temp.max}}&#176;C&nbsp;&#126;&nbsp;'+
                      'Low: {{responseData.temp.min}}&#176;C'+
                  '</p>'+
                  '</div>'+
                '</div>'+
                '<div class="panel-footer">'+
                  '<small>'+
                    'Day: {{responseData.temp.day}}&#176;C&nbsp;&#126;&nbsp;'+
                    'Night: {{responseData.temp.night}}&#176;C&nbsp;&#126;&nbsp;'+
                    'Pressure: {{responseData.pressure}} hPa&nbsp;&#126;&nbsp;'+
                    'Humidity: {{responseData.humidity}}%'+
                  '</small>'+
                '</div>'+
              '</div>'
  }
});