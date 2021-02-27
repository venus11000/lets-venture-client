import { getJobs } from "../../api";
import { apiErrorHandler } from "../../ErrorHandler/apiErrorHandler";
import { GET_JOBS_LOADING, GET_JOBS_ERROR, GET_JOBS_SUCCESS } from "./constants";

export function getJobsAction(params) {
    return (dispatch) => {
        dispatch(getJobsLoading());
        getJobs(params)
            .then(response => {
                dispatch(getJobsSuccess(response.data));
            })
            .catch(error => {
                error.response && dispatch(getJobsError(error.response));
                apiErrorHandler(error);
            });
    }
}

export function getJobsLoading() {
    return {
        type: GET_JOBS_LOADING
    }
}

export function getJobsSuccess(data) {
    return {
        type: GET_JOBS_SUCCESS,
        data
    }
}

export function getJobsError(error) {
    return {
        type: GET_JOBS_ERROR,
        error
    }
}