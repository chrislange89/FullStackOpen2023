import Axios from 'axios';

const API_KEY = import.meta.env.VITE_REACT_APP_WEATHER_API_KEY;
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

async function getWeather(lat, lon) {
  const weatherData = await Axios.get(API_URL, {
    params: {
      lat,
      lon,
      appid: API_KEY,
      units: 'metric',
    },
  });
  console.log(weatherData.data);
  return weatherData.data;
}

export default getWeather;
