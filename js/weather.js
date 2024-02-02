const API_KEY = "69db7bc7048508ff565eedcba06dbe18";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(weatherUrl)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector("#weather span:first-child");
      const weather = document.querySelector("#weather span:last-child");
      const weatherIconImage = document.querySelector("#weather-icon");

      const cityName = data.name;
      const weatherTemp = data.main.temp;
      const weatherIcon = data.weather[0].icon;
      const weatherIconUrl = `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`;

      city.innerText = cityName;
      weather.innerText = `${weatherTemp}°C`;
      weatherIconImage.setAttribute("src", weatherIconUrl);
    });
}

function onGeoError() {
  alert("can't find you. No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
