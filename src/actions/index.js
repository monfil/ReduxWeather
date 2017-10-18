import axios from 'axios';

const API_KEY = 'ee0b9fad26f95c726bfda38e324fce5d';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETH_WEATHER = 'FETH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  return {
    type: FETH_WEATHER
  };
}
