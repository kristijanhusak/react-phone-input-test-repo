import { combineReducers } from 'redux';

import alertReducer from './alert';
import weatherReducer from './weather';
import weatherListReducer from './weather_list';
import notificationReducer from './notification';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  alert: alertReducer,
  weather: weatherReducer,
  weatherCities: weatherListReducer,
  notification: notificationReducer,
  form: formReducer,
});
