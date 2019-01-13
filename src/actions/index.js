import axios from 'axios';

const KEY = 'fa97a23e15c9b9dd7184156149099d39';
const URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${KEY}`;

export const WEATHER_INFO = 'WEATHER_INFO';

export const getWeather = city => {
  const url = `${URL}&q=${city},pak`;
  const request = axios.get(url);

  return {
    type: WEATHER_INFO,
    payload: request,
  };
};
