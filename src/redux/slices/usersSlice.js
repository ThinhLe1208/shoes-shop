import { createSlice } from '@reduxjs/toolkit';
import { usersThunk } from 'redux/thunks/usersThunk';

import { ACCESS_TOKEN, USER_LOGIN } from 'utils/constants/settingSystem';
import { history } from 'utils/history';
import { storage } from 'utils/storage';

const initialState = {
    userLogin: storage.getStorageJson(USER_LOGIN),
    userProfile: null
};

const usersSlice = createSlice({
    name: 'usersSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // signUp
            .addCase(usersThunk.signUp.fulfilled, (state, { payload }) => {
                history.push('/signin');
            })
            // signIn
            .addCase(usersThunk.signIn.fulfilled, (state, { payload }) => {
                state.userLogin = payload;
                storage.setStorageJson(USER_LOGIN, payload);
                storage.setStorageJson(ACCESS_TOKEN, payload.accessToken);
                storage.setCookieJson(USER_LOGIN, payload, 30);
                history.push('/index');
            })
            // getProfile
            .addCase(usersThunk.getProfile.fulfilled, (state, { payload }) => {
                state.userProfile = payload;
            })
            // updateProfile
            .addCase(usersThunk.updateProfile.fulfilled, (state, { payload }) => {
                state.userProfile = payload;
            });
    }
});

export const { } = usersSlice.actions;

export default usersSlice.reducer;