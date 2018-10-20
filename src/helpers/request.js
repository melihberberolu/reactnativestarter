import axios from 'axios';

import { GET, POST, PUT, DELETE, API_BASE_URL } from "../constants";

const axiosInstance = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Authorization': 'Bearer' + getAccessToken()
    }
});

export const makeRequest = (method, body, path) => {
    switch (method) {

    }
};