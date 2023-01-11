// Form Submission
const form = document.getElementById('weather-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const location = document.getElementById('location').value;
  getWeather(location);
});

// Get Weather Function
function getWeather(location) {
  const apiKey = 'add api here';
  const units = 'metric';
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=${units}`)
    .then((res) => res.json())
    .then((data) => {
      const weatherInfo = document.getElementById('weather-info');
      let output = `
        <div class="weather-card">
          <div class="weather-header">
            <h2>Weather in ${data.name}, ${data.sys.country}</h2>
            <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Weather Icon">
          </div>
          <div class="weather-body">
            <p>Temperature: ${data.main.temp}&#8451;</p>
            <p>Feels like: ${data.main.feels_like}&#8451;</p>
            <p>Description: ${data.weather[0].description}</p>
          </div>
        </div>
      `;
      weatherInfo.innerHTML = output;
    })
    .catch((err) => {
      console.log(err);
    });
}
