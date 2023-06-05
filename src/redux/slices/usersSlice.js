import { createSlice } from '@reduxjs/toolkit';
import { usersThunk } from 'redux/thunks/usersThunk';

import { ACCESS_TOKEN, USER_LOGIN } from 'utils/constants/settingSystem';
import { history } from 'utils/history';
import { storage } from 'utils/storage';

const initialState = {
    userLogin: storage.getStorageJson(USER_LOGIN),
    userProfile: null,
    favoriteList: null,
    isLoading: false,
    currentRequestId: undefined,
};

const usersSlice = createSlice({
    name: 'users',
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
            .addCase(usersThunk.updateProfile.pending, (state, { meta }) => {
                if (state.isLoading === false) {
                    state.isLoading = true;
                    state.currentRequestId = meta.requestId;
                }
            })
            .addCase(usersThunk.updateProfile.fulfilled, (state, { meta }) => {
                if (
                    state.isLoading === true &&
                    state.currentRequestId === meta.requestId
                ) {
                    state.isLoading = false;
                    state.currentRequestId = undefined;
                }
            })
            .addCase(usersThunk.updateProfile.rejected, (state, { meta }) => {
                if (
                    state.isLoading === true &&
                    state.currentRequestId === meta.requestId
                ) {
                    state.isLoading = false;
                    state.currentRequestId = undefined;
                }
            })
            // getProductfavorite
            .addCase(usersThunk.getProductfavorite.fulfilled, (state, { payload }) => {
                state.favoriteList = payload?.productsFavorite;
            })
            // like
            .addCase(usersThunk.like.pending, (state, { meta }) => {
                if (state.isLoading === false) {
                    state.isLoading = true;
                    state.currentRequestId = meta.requestId;
                }
            })
            .addCase(usersThunk.like.fulfilled, (state, { meta }) => {
                if (
                    state.isLoading === true &&
                    state.currentRequestId === meta.requestId
                ) {
                    state.isLoading = false;
                    state.currentRequestId = undefined;
                }
            })
            .addCase(usersThunk.like.rejected, (state, { meta }) => {
                if (
                    state.isLoading === true &&
                    state.currentRequestId === meta.requestId
                ) {
                    state.isLoading = false;
                    state.currentRequestId = undefined;
                }
            })
            // unlike
            .addCase(usersThunk.unlike.pending, (state, { meta }) => {
                if (state.isLoading === false) {
                    state.isLoading = true;
                    state.currentRequestId = meta.requestId;
                }
            })
            .addCase(usersThunk.unlike.fulfilled, (state, { meta }) => {
                if (
                    state.isLoading === true &&
                    state.currentRequestId === meta.requestId
                ) {
                    state.isLoading = false;
                    state.currentRequestId = undefined;
                }
            })
            .addCase(usersThunk.unlike.rejected, (state, { meta }) => {
                if (
                    state.isLoading === true &&
                    state.currentRequestId === meta.requestId
                ) {
                    state.isLoading = false;
                    state.currentRequestId = undefined;
                }
            });
    }
});

// export const { } = usersSlice.actions;

export default usersSlice.reducer;