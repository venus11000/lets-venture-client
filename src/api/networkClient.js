import Axios from "axios"

export const getBaseURL = () => {
    return process.env.REACT_APP_API_URL || "";
}

const getAuthToken = () => {
    return localStorage.getItem("authToken");
}

const checkAuthToken = () => {
    let authToken = getAuthToken();
    if (authToken) {
        Axios.defaults.headers.Authorization = 'Bearer ' + authToken;
    }
}

export const get = (url, params, headers) => {
    checkAuthToken();
    return Axios.get(getBaseURL() + 'api/' + url, {
        headers: {
            ...headers,
            common: {
                'Authorization': 'Bearer ' + localStorage.getItem("authToken") || "",
                'Access-Control-Allow-Origin': '*'
            }
        },
        params: {
            ...params
        }
    });
}

export const post = (url, body, params, headers) => {
    return Axios.post(getBaseURL() + 'api/' + url, body, {
        headers: {
            ...headers,
            common: {
                'Authorization': 'Bearer ' + localStorage.getItem("authToken") || "",
                // 'Access-Control-Allow-Origin': '*'
            }
        },
        params: {
            ...params
        }
    })
}

export const put = (url, params, headers, data) => {
    checkAuthToken();
    return Axios.put(getBaseURL() + 'api/' + url, {
        ...data
    }, {
        headers: {
            ...headers,
            common: {
                'Authorization': 'Bearer ' + localStorage.getItem("authToken") || "",
                // 'Access-Control-Allow-Origin': '*'
            }
        },
        params: {
            ...params
        }
    });

}