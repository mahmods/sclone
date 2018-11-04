import { combineReducers } from 'redux'
import player from './playerReducer';
import api from './apiReducer';

const rootReducer = combineReducers({
    player,
    api,
  });
  
  export default rootReducer;