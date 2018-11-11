import axios from 'axios';

import { GET, POST, PUT, DELETE, API_BASE_URL } from "../constants";
import { getAccessToken } from "./authentication";

const axiosInstance = axios.create({
    baseURL: API_BASE_URL,
});

export const makeRequest = (method, path, body) => {
    switch (method) {
        case GET:
            axiosInstance.get(`${path}`)
                .then(response => response)
                .catch(error => error);
            break;
        case POST:
            axiosInstance.post(`${path}`, { body: body })
                .then(response => response)
                .catch(error => error);
            break;
        case PUT:
            axiosInstance.put(`${path}`, { body: body })
                .then(response => response)
                .catch(error => error);
            break;
        case DELETE:
            axiosInstance.delete(`${path}`, { body: body })
                .then(response => response)
                .catch(error => error);
            break;
    }
};
