import { combineReducers } from 'redux';
import WeatherReducer from './weather_reducer';

const rootReducer = combineReducers({
  weatherInfo: WeatherReducer,
});

export default rootReducer;
