import axios from 'axios';

import { GET, POST, PUT, DELETE, API_BASE_URL } from "../constants";
import { getAccessToken } from "./authentication";

const axiosInstance = axios.create({
    baseURL: API_BASE_URL,
});

export const makeRequest = async(method, path, body) => {
    switch (method) {
        case GET:
            return await axiosInstance.get(`${path}`);
        case POST:
            return await axiosInstance.post(`${path}`, { body: body });
        case PUT:
            return await axiosInstance.put(`${path}`, { body: body });
        case DELETE:
            return await axiosInstance.delete(`${path}`, { body: body });
    }
};
