
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
    errorMessage();
  } else {
    document.getElementById("cityName").innerHTML = weatherJson.name;
    document.getElementById("mainWeather").innerHTML = weatherJson.weather[0].description;
    document.getElementById("tempTitle").innerHTML = "current temp";
    document.getElementById("temp").innerHTML = Math.round(weatherJson.main.temp) + "&deg;F";
    document.getElementById("minTempTitle").innerHTML = "low";
    document.getElementById("minTemp").innerHTML = Math.round(weatherJson.main.temp_min) + "&deg;F";
    document.getElementById("maxTempTitle").innerHTML = "high";
    document.getElementById("maxTemp").innerHTML = Math.round(weatherJson.main.temp_max) + "&deg;F";
    document.getElementById("weatherIcon").innerHTML = "<img src=\"http://openweathermap.org/img/wn/" + weatherJson.weather[0].icon + "@2x.png\"\>\<img\>";
    document.getElementById("humidityTitle").innerHTML = "humidity";
    document.getElementById("humidity").innerHTML = weatherJson.main.humidity + "%";
    document.getElementById("sunriseTitle").innerHTML = "sunrise"
    document.getElementById("sunrise").innerHTML = new Date(weatherJson.sys.sunrise * 1000).toLocaleTimeString();
    document.getElementById("sunsetTitle").innerHTML = "sunset"
    document.getElementById("sunset").innerHTML = new Date(weatherJson.sys.sunset * 1000).toLocaleTimeString();
    updateBackground(weatherJson);
  };
};

function enterKey(event) {
  if (event.key === "Enter") {
    getWeather();
  }
};

function errorMessage() {
  resetPage();
  document.getElementById("cityName").innerHTML = "Something went wrong! Please try a different zipcode. &#175;\\_(&#12484;)_/&#175;";
};

function preSearch() {
  document.getElementById("cityName").innerHTML = "Search for your city";
};

function resetPage() {
  document.getElementById("cityName").innerHTML = "";
  document.getElementById("mainWeather").innerHTML = "";
  document.getElementById("tempTitle").innerHTML = "";
  document.getElementById("temp").innerHTML = "";
  document.getElementById("minTempTitle").innerHTML = "";
  document.getElementById("minTemp").innerHTML = "";
  document.getElementById("maxTempTitle").innerHTML = "";
  document.getElementById("maxTemp").innerHTML = "";
  document.getElementById("weatherIcon").innerHTML = "";
  document.getElementById("humidityTitle").innerHTML = "";
  document.getElementById("humidity").innerHTML = "";
  document.getElementById("sunriseTitle").innerHTML = "";
  document.getElementById("sunrise").innerHTML = "";
  document.getElementById("sunsetTitle").innerHTML = "";
  document.getElementById("sunset").innerHTML = "";
}

function updateBackground(weatherJson) {  
  if (weatherJson.weather[0].icon === "01d") {
    document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1531147646552-1eec68116469?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')";
    } else if (weatherJson.weather[0].icon === "11d") {
      document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1564343921985-91ced954364a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')";
   } else if (weatherJson.weather[0].icon === "09d") {
      document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60')";
   } else if (weatherJson.weather[0].icon === "10d") {
      document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80')";
   } else if (weatherJson.weather[0].icon === "13d") {
      document.body.style.backgroundImage =  "url('https://images.unsplash.com/photo-1507181380775-16c084b6c9d1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80')";
   } else if (weatherJson.weather[0].icon === "50d" || "50n") {
      document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1423209086112-cf2c8acd502f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80')";
   } else if (weatherJson.weather[0].icon === "02d" || "02n" || "03d" || "03n" || "04d" || "04n") {
      document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1498496294664-d9372eb521f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80')";
   } else {
     return;
   }
      
  };

})();


  