import { http } from "./baseService";

class UsersService {
    signUp = (payload) => http.post('/api/Users/signup', payload);

    signIn = (payload) => http.post('/api/Users/signin', payload);

    facebooklogin = (payload) => http.post('/api/Users/facebooklogin', payload);

    getProfile = () => http.post('/api/Users/getProfile');

    updateProfile = (payload) => http.post('/api/Users/updateProfile', payload);

    like = (productId) => {
        let url = '/api/Users/like';
        if (productId) {
            url += `?productId=${productId}`;
        }
        return http.get(url);
    };

    unlike = (productId) => {
        let url = '/api/Users/unlike';
        if (productId) {
            url += `?productId=${productId}`;
        }
        return http.get(url);
    };

    getProductfavorite = (token) => {
        // when user sign in, favorite count cant be updated in header because token is delayed (401) -> set token directly after user sign in 
        let config = {};
        if (token) {
            config = {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            };
        }
        return http.get('/api/Users/getproductfavorite', null, config);
    };

    order = (payload) => http.post('/api/Users/order', payload);

    deleteOrder = (payload) => http.post('/api/Users/deleteOrder', payload);
}

export const usersService = new UsersService();