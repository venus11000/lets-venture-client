import {
    SHOW_POPUP,
    HIDE_POPUP
} from './constants';

const initialState = {};

export default function popupReducer(state = initialState, action) {
    switch (action.type) {
        case SHOW_POPUP:
            return Object.assign({}, state, {
                ...action.data
            });

        case HIDE_POPUP:
            return Object.assign({}, {}, {});

        default: return state;
    }
}