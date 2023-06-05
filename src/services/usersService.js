import { http } from "./baseService";

class UsersService {
    signUp = (payload) => http.post('/api/Users/signup', payload);

    signIn = (payload) => http.post('/api/Users/signin', payload);

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

    getProductfavorite = () => http.get('/api/Users/getproductfavorite');
}

export const usersService = new UsersService();