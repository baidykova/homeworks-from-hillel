fetch(
  "http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19"
)
  .then((response) => response.json())
  .then((json) => {
    if (json.cod === '404') {
      return;
    }

    const city = document.querySelector('.city');
    const temp = document.querySelector('.temperature');
    const pressure = document.querySelector('.pressure');
    const description = document.querySelector('.description');
    const humidity = document.querySelector('.humidity');
    const speed = document.querySelector('.speed');
    const deg = document.querySelector('.deg');
    const icon = document.getElementById('icon');

    icon.src = 'http://openweathermap.org/img/w/10d.png';
    city.innerHTML = `city: ${json.name}`;
    temp.innerHTML = `temp: ${parseInt(json.main.temp)}°C`;
    pressure.innerHTML = `pressure: ${json.main.pressure}`;
    humidity.innerHTML = `humidity: ${parseInt(json.main.humidity)}%`;
    speed.innerHTML = `window speed: ${parseInt(json.wind.speed)} Km/h`;
    deg.innerHTML = `direction in degrees: ${parseInt(json.wind.deg)}`;
    description.innerHTML = `description: ${json.weather[0].description}`;
  });