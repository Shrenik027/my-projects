// City Input Listener

document.getElementById("city").addEventListener("input", function () {
  var city = this.value;
  getWeather(city);
});

// Fetching Weather Data
async function getWeather(city = "New York") {
  try {
    if (!city) {
      city = "New York"; // Fallback to New York if no city is provided
    }

    console.log("City name:", city);

    const response = await axios.get(
      "https://api.openweathermap.org/data/2.5/forecast",
      {
        params: {
          q: city,
          appid: "54a57bc234ad752a4f59e59cd372201d",
          units: "metric",
        },
      }
    );

    /* Showing Jason format data */
    console.log(response);

    //getting currentTemp using Response (Extracting Weather Data)

    const currentTemperature = response.data.list[0].main.temp;

    document.querySelector(".weather-temp").textContent =
      Math.round(currentTemperature) + "ºC";

    // Forecast Data
    const forecastData = response.data.list;

    const dailyForecast = {};
    forecastData.forEach((data) => {
      const day = new Date(data.dt * 1000).toLocaleDateString("en-US", {
        weekday: "long",
      });
      if (!dailyForecast[day]) {
        dailyForecast[day] = {
          minTemp: data.main.temp_min,
          maxTemp: data.main.temp_max,
          description: data.weather[0].description,
          humidity: data.main.humidity,
          windSpeed: data.wind.speed,
          icon: data.weather[0].icon,
        };
      } else {
        dailyForecast[day].minTemp = Math.min(
          dailyForecast[day].minTemp,
          data.main.temp_min
        );
        dailyForecast[day].maxTemp = Math.max(
          dailyForecast[day].maxTemp,
          data.main.temp_max
        );
      }
    });

    // Updating the UI

    document.querySelector(".date-dayname").textContent =
      new Date().toLocaleDateString("en-US", { weekday: "long" });

    const date = new Date().toUTCString();
    const extractedDateTime = date.slice(5, 16);
    document.querySelector(".date-day").textContent =
      extractedDateTime.toLocaleString("en-US");

    const currentWeatherIconCode =
      dailyForecast[new Date().toLocaleDateString("en-US", { weekday: "long" })]
        .icon;
    const weatherIconElement = document.querySelector(".weather-icon");
    weatherIconElement.innerHTML = getWeatherIcon(currentWeatherIconCode);

    document.querySelector(".location").textContent = response.data.city.name;
    document.querySelector(".weather-desc").textContent = dailyForecast[
      new Date().toLocaleDateString("en-US", { weekday: "long" })
    ].description
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    document.querySelector(".humidity .value").textContent =
      dailyForecast[new Date().toLocaleDateString("en-US", { weekday: "long" })]
        .humidity + " %";
    document.querySelector(".wind .value").textContent =
      dailyForecast[new Date().toLocaleDateString("en-US", { weekday: "long" })]
        .windSpeed + " m/s";

    const dayElements = document.querySelectorAll(".day-name");
    const tempElements = document.querySelectorAll(".day-temp");
    const iconElements = document.querySelectorAll(".day-icon");

    dayElements.forEach((dayElement, index) => {
      const day = Object.keys(dailyForecast)[index];
      const data = dailyForecast[day];
      dayElement.textContent = day;
      tempElements[index].textContent = `${Math.round(
        data.minTemp
      )}º / ${Math.round(data.maxTemp)}º`;
      iconElements[index].innerHTML = getWeatherIcon(data.icon);
    });
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
}

// Displaying Weather Icon

function getWeatherIcon(iconCode) {
  const iconBaseUrl = "https://openweathermap.org/img/wn/";
  const iconSize = "@2x.png";
  return `<img src="${iconBaseUrl}${iconCode}${iconSize}" alt="Weather Icon">`;
}

// Auto Refresh After Every 15 Minutes

document.addEventListener("DOMContentLoaded", function () {
  getWeather();
  setInterval(getWeather, 900000);
});

// Current Time

function displayCurrentTime() {
  const timeContainer = document.querySelector(".current-time");
  setInterval(() => {
    const now = new Date();
    timeContainer.innerHTML = now.toLocaleTimeString();
  }, 100);
}
displayCurrentTime();

/* Feature - Set current location as default */
// Using eoLocation for Current Location
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function (position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    getWeatherByLocation(latitude, longitude);
  });
}

// Fetching Weather By Location

async function getWeatherByLocation(lat, lon) {
  try {
    const response = await axios.get(
      "https://api.openweathermap.org/data/2.5/forecast",
      {
        params: {
          lat: lat,
          lon: lon,
          appid: "54a57bc234ad752a4f59e59cd372201d",
          units: "metric",
        },
      }
    );

    const city = response.data.city.name;
    document.getElementById("city").value = city; // Set the location in input field
    getWeather(city); // Call getWeather with the city name
  } catch (error) {
    console.error("Error getting weather by location:", error.message);
  }
}
