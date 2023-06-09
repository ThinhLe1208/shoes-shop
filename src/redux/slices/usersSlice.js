import { createSlice } from '@reduxjs/toolkit';
import { usersThunk } from 'redux/thunks/usersThunk';

import { USER_LOGIN } from 'utils/constants/settingSystem';
import { storage } from 'utils/storage';

const initialState = {
    userLogin: storage.getStorageJson(USER_LOGIN),
    userProfile: null,
    favoriteList: [],
    isLoadingUsers: false,
    currentRequestIdUsers: undefined,
};

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        clearUsersInfo: (state) => {
            state.favoriteList = [];
            state.userLogin = null;
            state.userProfile = null;
        }
    },
    extraReducers: (builder) => {
        builder
            // signIn
            .addCase(usersThunk.signIn.fulfilled, (state, { payload }) => {
                state.userLogin = payload;
            })
            // facebooklogin
            .addCase(usersThunk.facebooklogin.pending, (state, { meta }) => {
                if (state.isLoadingUsers === false) {
                    state.isLoadingUsers = true;
                    state.currentRequestIdUsers = meta.requestId;
                }
            })
            .addCase(usersThunk.facebooklogin.fulfilled, (state, { payload, meta }) => {
                if (
                    state.isLoadingUsers === true &&
                    state.currentRequestIdUsers === meta.requestId
                ) {
                    state.isLoadingUsers = false;
                    state.currentRequestIdUsers = undefined;
                }
                state.userLogin = payload;
            })
            .addCase(usersThunk.facebooklogin.rejected, (state, { meta }) => {
                if (
                    state.isLoadingUsers === true &&
                    state.currentRequestIdUsers === meta.requestId
                ) {
                    state.isLoadingUsers = false;
                    state.currentRequestIdUsers = undefined;
                }
            })
            // getProfile
            .addCase(usersThunk.getProfile.fulfilled, (state, { payload }) => {
                state.userProfile = payload;
            })
            // updateProfile
            .addCase(usersThunk.updateProfile.pending, (state, { meta }) => {
                if (state.isLoadingUsers === false) {
                    state.isLoadingUsers = true;
                    state.currentRequestIdUsers = meta.requestId;
                }
            })
            .addCase(usersThunk.updateProfile.fulfilled, (state, { meta }) => {
                if (
                    state.isLoadingUsers === true &&
                    state.currentRequestIdUsers === meta.requestId
                ) {
                    state.isLoadingUsers = false;
                    state.currentRequestIdUsers = undefined;
                }
            })
            .addCase(usersThunk.updateProfile.rejected, (state, { meta }) => {
                if (
                    state.isLoadingUsers === true &&
                    state.currentRequestIdUsers === meta.requestId
                ) {
                    state.isLoadingUsers = false;
                    state.currentRequestIdUsers = undefined;
                }
            })
            // getProductfavorite
            .addCase(usersThunk.getProductfavorite.fulfilled, (state, { payload }) => {
                state.favoriteList = payload?.productsFavorite;
            })
            // like
            .addCase(usersThunk.like.pending, (state, { meta }) => {
                if (state.isLoadingUsers === false) {
                    state.isLoadingUsers = true;
                    state.currentRequestIdUsers = meta.requestId;
                }
            })
            .addCase(usersThunk.like.fulfilled, (state, { meta }) => {
                if (
                    state.isLoadingUsers === true &&
                    state.currentRequestIdUsers === meta.requestId
                ) {
                    state.isLoadingUsers = false;
                    state.currentRequestIdUsers = undefined;
                }
            })
            .addCase(usersThunk.like.rejected, (state, { meta }) => {
                if (
                    state.isLoadingUsers === true &&
                    state.currentRequestIdUsers === meta.requestId
                ) {
                    state.isLoadingUsers = false;
                    state.currentRequestIdUsers = undefined;
                }
            })
            // unlike
            .addCase(usersThunk.unlike.pending, (state, { meta }) => {
                if (state.isLoadingUsers === false) {
                    state.isLoadingUsers = true;
                    state.currentRequestIdUsers = meta.requestId;
                }
            })
            .addCase(usersThunk.unlike.fulfilled, (state, { meta }) => {
                if (
                    state.isLoadingUsers === true &&
                    state.currentRequestIdUsers === meta.requestId
                ) {
                    state.isLoadingUsers = false;
                    state.currentRequestIdUsers = undefined;
                }
            })
            .addCase(usersThunk.unlike.rejected, (state, { meta }) => {
                if (
                    state.isLoadingUsers === true &&
                    state.currentRequestIdUsers === meta.requestId
                ) {
                    state.isLoadingUsers = false;
                    state.currentRequestIdUsers = undefined;
                }
            })
            // order
            .addCase(usersThunk.order.pending, (state, { meta }) => {
                if (state.isLoadingUsers === false) {
                    state.isLoadingUsers = true;
                    state.currentRequestIdUsers = meta.requestId;
                }
            })
            .addCase(usersThunk.order.fulfilled, (state, { meta }) => {
                if (
                    state.isLoadingUsers === true &&
                    state.currentRequestIdUsers === meta.requestId
                ) {
                    state.isLoadingUsers = false;
                    state.currentRequestIdUsers = undefined;
                }
            })
            .addCase(usersThunk.order.rejected, (state, { meta }) => {
                if (
                    state.isLoadingUsers === true &&
                    state.currentRequestIdUsers === meta.requestId
                ) {
                    state.isLoadingUsers = false;
                    state.currentRequestIdUsers = undefined;
                }
            });
    }
});

export const { clearUsersInfo } = usersSlice.actions;

export default usersSlice.reducer;