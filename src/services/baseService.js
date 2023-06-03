import axios from "axios";
import jwt_decode from 'jwt-decode';

import { ACCESS_TOKEN, DOMAIN, USER_LOGIN } from "utils/constants/settingSystem";
import { history } from "utils/history";
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
        console.log("response:", response);

        return response;
    },
    (error) => {
        console.log('error', error);
        if (error) {
            localStorage.removeItem(USER_LOGIN);
            localStorage.removeItem(ACCESS_TOKEN);
            history.push('/login');
        }

        if (error.response?.status === 401 || error.response?.status === 403) {
            //Đã đăng nhập nhưng hết hạn (gọi api refresh token)
            let decodedToken = jwt_decode(storage.getStoreJson(ACCESS_TOKEN));
            console.log('Decoded Token', decodedToken);
            let currentDate = new Date();

            // JWT exp is in seconds
            if (decodedToken.exp * 1000 < currentDate.getTime()) {
                console.log('Token expired.');
                //Remove userlogin trong localstorage
                localStorage.removeItem(USER_LOGIN);
                localStorage.removeItem(ACCESS_TOKEN);
                //Chuyển hướng về đăng nhập
                history.push('/login');
            }

            //Chưa đăng nhập
            alert('Đăng nhập để vào trang này !');
            history.push('/login');
        }
        if (error.response?.status === 400 || error.response?.status === 404) {
            console.log('interceptors response 400/404', error);
        }
        return Promise.reject(error);
    }
);
