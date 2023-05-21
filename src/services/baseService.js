import axios from "axios";

import { ACCESS_TOKEN, DOMAIN } from "utils/constants/settingSystem";
import { history } from "utils/history";
import { storage } from "utils/storage";

export const http = axios.create({
    baseURL: DOMAIN,
    timeout: 30000,
});

// http.interceptors.request.use(
//     (config) => {
//         config.headers['Authorization'] = 'Bearer ' + JSON.parse(storage.getStore(ACCESS_TOKEN));
//         return config;
//     },
//     (err) => {
//         return Promise.reject(err);
//     }
// );

// http.interceptors.response.use(
//     (response) => {
//         return response;
//     },
//     (error) => {
//         if (error.response?.status === 400 || error.response?.status === 404) {
//             history.push('/index');
//         }
//         if (error.response?.status === 401 || error.response?.status === 403) {
//             history.push('/login');
//         }
//         return Promise.reject(error);
//     }
// );
