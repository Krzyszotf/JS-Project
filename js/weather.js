const input = document.querySelector('input');
const button = document.querySelector('.sendButton');
const cityName = document.querySelector('.city-name');
// const warning = document.querySelector('.warning');
const photo = document.querySelector('.wrapper');
const weather = document.querySelector('.weather');
const temperature = document.querySelector('.temperature');
const humidity = document.querySelector('.humidity');
const wind = document.querySelector('.wind');

const API_LINK = 'https://api.openweathermap.org/data/2.5/weather?q=';
const API_KEY = '&appid=6b0468bfb0fca22cb7492703c1e60fe1';
const API_UNITS = '&units=metric';

const getWeather = () => {
	const city = input.value || 'kraków';
	const URL = API_LINK + city + API_KEY + API_UNITS;

	axios
		.get(URL)
		.then((res) => {
			const temp = res.data.main.temp;
			const hum = res.data.main.humidity;
			const win = res.data.wind.speed;
			const status = res.data.weather[0];
			const weatherID = res.data.weather[0].id;

			// console.log(res.data);

			cityName.textContent = res.data.name;
			temperature.textContent = temp.toFixed(1) + ' °C';
			humidity.textContent = hum + ' %';
			wind.textContent = win.toFixed(1) + ' KM/H';

			if (weatherID >= 200 && weatherID <= 299) {
				photo.style.backgroundImage = 'url("../img/weather/thunderstorm.png")';
			} else if (weatherID >= 300 && weatherID <= 399) {
				photo.style.backgroundImage = 'url("../img/weather/drizzle.png")';
			} else if (weatherID >= 500 && weatherID <= 599) {
				photo.style.backgroundImage = 'url("../img/weather/rain.png")';
			} else if (weatherID >= 600 && weatherID <= 699) {
				photo.style.backgroundImage = 'url("../img/weather/ice.png")';
			} else if (weatherID >= 700 && weatherID <= 799) {
				photo.style.backgroundImage = 'url("../img/weather/fog.png")';
			} else if (weatherID === 800) {
				photo.style.backgroundImage = 'url("../img/weather/sun.png")';
			} else if (weatherID >= 801 && weatherID <= 810) {
				photo.style.backgroundImage = 'url("../img/weather/cloud.png")';
			} else {
				photo.style.backgroundImage = 'url("../img/weather/unknown.png")';
			}

			const statusText = status.main;
			let translatedWeather;

			switch (statusText) {
				case 'Clear':
					translatedWeather = 'Pogodnie';
					break;
				case 'Thunderstorm':
					translatedWeather = 'Burza';
					break;
				case 'Drizzle':
					translatedWeather = 'Mżawka';
					break;
				case 'Rain':
					translatedWeather = 'Deszcz';
					break;
				case 'Snow':
					translatedWeather = 'Śnieg';
					break;
				case 'Clouds':
					translatedWeather = 'Pochmurno';
					break;
				case 'Mist':
				case 'Smoke':
				case 'Haze':
				case 'Dust':
				case 'Fog':
				case 'Sand':
				case 'Ash':
				case 'Squall':
				case 'Tornado':
					translatedWeather = 'Mgła';
					break;
				default:
					translatedWeather = 'Nieznane';
					break;
			}

			weather.textContent = translatedWeather;
		})
		.catch((error) => {
			console.error('Błąd zapytania:', error);
			alert('Wprowadź poprawną nazwę miasta.');
			input.value = '';
		});
};

getWeather();

button.addEventListener('click', () => {
	getWeather();
	input.value = '';
});

input.addEventListener('keydown', (event) => {
	if (event.key === 'Enter') {
		getWeather();
		input.value = '';
	}
});
