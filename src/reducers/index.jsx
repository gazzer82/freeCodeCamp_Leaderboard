import { combineReducers } from 'redux';
import Campers30Reducer from './reducer-campers-30-days';
import CampersAllReducer from './reducer-campers-all-time';

const rootReducer = combineReducers({
  campers30: Campers30Reducer,
  campersAll: CampersAllReducer
});

export default rootReducer;
