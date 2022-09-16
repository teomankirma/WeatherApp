const currentDayHTML = document.getElementById("header");
const weatherInfoHTML = document.getElementById("information");
const btnSearch = document.getElementById("btn__search");

// Getting current day
let today = new Date();
let todayDate = today.getDate().toString();
let todayMonth = today.toLocaleString("default", { month: "long" });
let todayYear = today.getFullYear().toString();

// Adding current day to HTML
currentDayHTML.insertAdjacentHTML(
  "afterend",
  `<p>As of ${todayMonth} ${todayDate}, ${todayYear}</p>`
);

const getWeatherInfo = async function (e) {
  let cityName = document.getElementById("city__name").value;
  e.preventDefault();
  weatherInfoHTML.innerHTML = "";
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=853349c5d8cf93911a4f62ac59503dd4&units=metric`
    );

    const data = await res.json();

    weatherInfoHTML.insertAdjacentHTML(
      "afterbegin",
      `<tr>
        <th class="city">Currently in, ${data.name}</th>
        <td class="current_weather">${data.weather[0].main}</td>
    </tr>
    <tr>
        <td class="temp">Temperature</td>
        <td class="temp_value">${Math.round(data.main.temp)}℃</td>
    </tr>
    <tr>
        <td class="humidity">Humidity</td>
        <td class="hum_value">%${data.main.humidity}</td>
    </tr>
    <tr>
        <td class="max_temp">Maximum</td>
        <td class="max_temp_value">${Math.round(data.main.temp_max)}℃</td>
    </tr>
    <tr>
        <td class="min_temp">Minimum</td>
        <td class="temp_value">${Math.trunc(data.main.temp_min)}℃</td>
    </tr>
    <tr>
        <td class="rain_chance">Feels Like</td>
        <td class="temp_value">${Math.round(data.main.feels_like)}℃</td>
    </tr>`
    );
  } catch (err) {
    weatherInfoHTML.innerHTML = "";
    weatherInfoHTML.insertAdjacentHTML(
      "afterbegin",
      `<tr>
        <th>Couldn't find the city you are looking for 😕. Please make sure you wrote correctly. ${err}</th>
        </tr>`
    );
  }
};

btnSearch.addEventListener("click", getWeatherInfo);
