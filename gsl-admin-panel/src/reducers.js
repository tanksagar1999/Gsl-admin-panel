import { combineReducers } from 'redux';
import homeReducer from './app/home/operations/reducers';

const rootReducer = combineReducers({
    home: homeReducer
});

export default rootReducer;