import { GET_JOBS_LOADING, GET_JOBS_SUCCESS, GET_JOBS_ERROR } from './constants';

const initialState = {
    jobs: {
        loading: false,
        data: null,
        error: null
    }
};

export default function contactUsReducer(state = initialState, action) {
    switch (action.type) {
        case GET_JOBS_LOADING:
            return Object.assign({}, state, {
                jobs: {
                    loading: true,
                    data: null,
                    error: null
                }
            });

        case GET_JOBS_SUCCESS:
            return Object.assign({}, state, {
                jobs: {
                    loading: false,
                    data: action.data,
                    error: null
                }
            });

        case GET_JOBS_ERROR:
            return Object.assign({}, state, {
                jobs: {
                    loading: false,
                    data: null,
                    error: action.error
                }
            });

        default: return state;
    }
}