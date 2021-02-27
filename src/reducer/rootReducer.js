import { combineReducers } from 'redux';
import homeReducer from '../containers/Homepage/reducer';

const rootReducer = combineReducers({
    homepage: homeReducer,
});

export default rootReducer;