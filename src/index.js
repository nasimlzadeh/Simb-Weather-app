function showInfo(response) {
  console.log(response);
  let tempElement = document.querySelector("#city-temp");
  tempElement.innerHTML = Math.round(response.data.main.temp);
  let humidElement = document.querySelector("#humidity");
  humidElement.innerHTML = Math.round(response.data.main.humidity);
  let windElement = document.querySelector("#wind");
  windElement.innerHTML = Math.round(response.data.wind.speed);
  let desiredCity = document.querySelector("#city-name");
  desiredCity.innerHTML = response.data.name;
  let description = document.querySelector("#weather-icon");
  description.innerHTML = response.data.weather[0].description;
  let timestamp = new Date(response.data.dt * 1000); //new date() receives UNIX in miliseconds and the timestamp provided by openweatherapp is in seconds
  let iconElement = document.querySelector("#icon");
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  iconElement.setAttribute("alt", `${response.data.weather[0].description}`);
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let today = document.querySelector("#current-day");
  today.innerHTML = days[timestamp.getDay()];
  let hours = document.querySelector("#hours");
  let correctHour = timestamp.getHours();
  console.log(correctHour);
  if (correctHour < 10) {
    correctHour = `0${correctHour}`;
  }
  hours.innerHTML = correctHour;
  let minutes = document.querySelector("#minutes");
  let correctMinutes = timestamp.getMinutes();
  console.log(correctMinutes);
  if (correctMinutes < 10) {
    correctMinutes = `0${correctMinutes}`;
  }
  minutes.innerHTML = correctMinutes;
}
let apiKey = "d44a337dcba067ff8eff53da085f3633";
let cityName = "tehran";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(showInfo);
