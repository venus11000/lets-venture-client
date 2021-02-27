import { get, post, put } from "./networkClient";

export const getJobs = (params) => {
    return get('jobs/list', params);
}