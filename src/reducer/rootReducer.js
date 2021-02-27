import { combineReducers } from 'redux';
import popupReducer from '../components/Popup/reducer';
import homeReducer from '../containers/Homepage/reducer';

const rootReducer = combineReducers({
    homepage: homeReducer,
    popup: popupReducer
});

export default rootReducer;