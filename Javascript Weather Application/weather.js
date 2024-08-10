const inputCity = document.querySelector("#inputCity");
const searchbtn = document.querySelector("#button-addon1");
const Weather = document.querySelector(".show-weather");

const API_key = "a8b4456fca9310e272d9fb3bdcc68b3b";

searchbtn.addEventListener("click", () => {
  getWeatherData(inputCity.value);
});

async function getWeatherData(city) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`
  );
  const data = await response.json();
  // console.log(data);
  showWeather(data);
}

function showWeather(data) {
  const iconCode = data.weather[0].icon;
  const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;
  Weather.innerHTML = `
            <img src="${iconUrl}" alt="" style="height:100px;width:100px;">
            <h4 class="card-title fw-bold">${data.name}</h4>
            <h2 class="card-text fw-bold">${data.main.temp}°C</h2>
            <h4 class="card-text fw-bold">${data.weather[0].description}</h4>
    `;
}
