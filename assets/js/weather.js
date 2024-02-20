/*

 Open source repository on GitHub: https://github.com/mervebilgin/WeatherApp

*/

const url = 'https://api.openweathermap.org/data/2.5/'
const key = '739ef515e3ade2c79525a82f51f458a5'
const cityName = 'Wellington' // Change this to your desired city in New Zealand

$.getJSON(`${url}weather?q=${cityName}&appid=${key}&units=metric&lang=en`, function(data) {
    $("#weather").html(`<span class="text-capitalize">${data.weather[0].description}</span> of ${Math.round(data.main.temp)}°C in ${data.name}, ${data.sys.country}`);
});
