import axios from "axios";

import { ACCESS_TOKEN, DOMAIN } from "utils/constants/settingSystem";
import { storage } from "utils/storage";

export const http = axios.create({
    baseURL: DOMAIN,
    timeout: 30000,
});

http.interceptors.request.use(
    (config) => {
        config.headers['Authorization'] = 'Bearer ' + storage.getStorageJson(ACCESS_TOKEN);
        return config;
    },
    (err) => {
        return Promise.reject(err);
    }
);

http.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response?.status === 400 || error.response?.status === 404) {
            console.log('interceptors response 400/404', error);
        }
        if (error.response?.status === 401 || error.response?.status === 403) {
            console.log('interceptors response 401/403', error);
        }
        return Promise.reject(error);
    }
);
