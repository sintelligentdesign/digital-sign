function updateWeather() {
    $.simpleWeather({
        location: '17603',
        unit: 'f',
        success: function(weather) {
            document.getElementById("weather-temp").innerHTML = weather.temp + '&deg;'
            document.getElementById("weather-condition").innerHTML = weather.currently
            document.getElementById("weather-highLow").innerHTML = weather.high + '&deg;' + " - " + weather.low + '&deg;'
        },
        error: function(error) {
            $("#weather").html('<p>'+error+'</p>')
        }
    })
}