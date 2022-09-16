const getWeatherInfo = async function () {
  const res = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=izmir&appid=853349c5d8cf93911a4f62ac59503dd4&units=metric"
  );

  const data = await res.json();

  return console.log(data);
};

getWeatherInfo();
