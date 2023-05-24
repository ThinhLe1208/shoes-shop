import { http } from "./baseService";

class UsersService {
    signUp = (payload) => http.post('/api/Users/signup', payload);

    signIn = (payload) => http.post('/api/Users/signin', payload);

    getProfile = () => http.post('/api/Users/getProfile');

    updateProfile = (payload) => http.post('/api/Users/updateProfile', payload);

}

export const usersService = new UsersService();