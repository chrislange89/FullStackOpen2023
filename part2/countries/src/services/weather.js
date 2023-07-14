import Axios from 'axios';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

export default async function getWeather(city) {
  const { data } = await Axios.get(API_URL, {
    params: {
      q: city,
      appid: API_KEY,
      units: 'metric',
    },
  });
  return data;
}
