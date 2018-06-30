angular.module('weather')

.constant('OpenWeatherConfig', {
   searchUrl: 'http://api.openweathermap.org/data/2.5/weather?q=',
   units: '&units=metric',
   appid: '&appid=858832dfd54200f9fcee8657d00add97',
   imgUrl: 'http://openweathermap.org/img/w/'
})
