
(function () {

preSearch();
  
const appKey = "940fd859605b5ca475687cbfd13cdce1"

let button = document.getElementById("searchButton");
let searchZip =  document.getElementById("searchText");

button.addEventListener("click", getWeather);
searchZip.addEventListener("keyup", enterKey);

function getWeather() {
    if (searchZip.value === "") {
          preSearch();
    } else {
        let apiCall = "http://api.openweathermap.org/data/2.5/weather?zip="+ searchZip.value +",us&appid=" + appKey + "&units=imperial";
        fetch(apiCall)
        .then(function(response) {
            return response.json();
        })
        .then(function(weatherJson) {
            updateWeather(weatherJson);
        })
    }
};

function updateWeather(weatherJson) {
  if (weatherJson.cod === "404") {
    console.log(JSON.stringify(weatherJson));
    errorMessage();
  } else {
    console.log(JSON.stringify(weatherJson));
    document.getElementById("cityName").innerHTML = weatherJson.name;
    document.getElementById("mainWeather").innerHTML = weatherJson.weather[0].description;
    document.getElementById("tempTitle").innerHTML = "Current Temperature";
    document.getElementById("temp").innerHTML = Math.round(weatherJson.main.temp) + "&deg;F";
    document.getElementById("minTempTitle").innerHTML = "low";
    document.getElementById("minTemp").innerHTML = Math.round(weatherJson.main.temp_min) + "&deg;F";
    document.getElementById("maxTempTitle").innerHTML = "high";
    document.getElementById("maxTemp").innerHTML = Math.round(weatherJson.main.temp_max) + "&deg;F";
    document.getElementById("weatherIcon").innerHTML = "<img src=\"http://openweathermap.org/img/wn/" + weatherJson.weather[0].icon + "@2x.png\"\>\<img\>";
    
  };
};

function enterKey(event) {
  if (event.key === "Enter") {
    getWeather();
  }
};

function errorMessage() {
  document.getElementById("cityName").innerHTML = "Something went wrong! Please try a different zipcode. &#175;\\_(&#12484;)_/&#175;";
};

function preSearch() {
  document.getElementById("cityName").innerHTML = "Search for your city";
};

})();


  