import { combineReducers } from 'redux';
import citiesReducer from './citiesReducer';
import airportsReducer from './airportsReducer';


export default combineReducers({
    citiesReducer,airportsReducer
});