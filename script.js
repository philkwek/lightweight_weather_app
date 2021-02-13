function getCurrentLocation(){
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        alert('Geolocation is not supported by this browser')
    }
};

function showPosition(position){
    console.log(position.coords.latitude, position.coords.longitude)
}



function getWeatherData(){
    $.ajax({
        url: "http://api.openweathermap.org/data/2.5/weather?q=Singapore&appid=88154f11b1e1f5b155a009be7359b266&units=metric",
        type: "GET",

        success: function (result) { //this runs when the api get is a success

            console.log(result)

            var temperature = result['main']['temp']
            var weather = result['weather']['0']['description']

            console.log(weather, temperature)
        },

        error: function (error) { //runs when api get is unsuccessfull
            console.log(error)
        }
    })
};

$(document).ready(getWeatherData(), getCurrentLocation());