import axios from "axios";
import { toast } from "react-toastify";

import { ACCESS_TOKEN, DOMAIN } from "utils/constants/settingSystem";
import { history } from "utils/history";
import { storage } from "utils/storage";

export const http = axios.create({
    baseURL: DOMAIN,
    timeout: 30000,
});

http.interceptors.request.use(
    (config) => {
        const isLogin = storage.checkLogin();
        if (isLogin) {
            config.headers['Authorization'] = 'Bearer ' + storage.getStorageJson(ACCESS_TOKEN);
        }
        return config;
    },
    (err) => {
        toast.error("Failed to request.");
        return Promise.reject(err);
    }
);

http.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        console.log('error', error);

        if (error.response?.status === 401 || error.response?.status === 403) {
            const isLogin = storage.checkLogin();
            if (!isLogin) {
                toast.error("You must log in first.");
                history.push('/login');
            }
        }
        if (error.response?.status === 400 || error.response?.status === 404) {
            toast.error("The data was not found.");
        }
        return Promise.reject(error);
    }
);
