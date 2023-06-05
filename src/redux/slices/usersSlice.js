import { createSlice } from '@reduxjs/toolkit';
import { usersThunk } from 'redux/thunks/usersThunk';

import { USER_LOGIN } from 'utils/constants/settingSystem';
import { storage } from 'utils/storage';

const initialState = {
    userLogin: storage.getStorageJson(USER_LOGIN),
    userProfile: null,
    favoriteList: [],
    isLoading: false,
    currentRequestId: undefined,
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
            .addCase(usersThunk.facebooklogin.fulfilled, (state, { payload }) => {
                state.userLogin = payload;
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
            })
            // order
            .addCase(usersThunk.order.pending, (state, { meta }) => {
                if (state.isLoading === false) {
                    state.isLoading = true;
                    state.currentRequestId = meta.requestId;
                }
            })
            .addCase(usersThunk.order.fulfilled, (state, { meta }) => {
                if (
                    state.isLoading === true &&
                    state.currentRequestId === meta.requestId
                ) {
                    state.isLoading = false;
                    state.currentRequestId = undefined;
                }
            })
            .addCase(usersThunk.order.rejected, (state, { meta }) => {
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

export const { clearUsersInfo } = usersSlice.actions;

export default usersSlice.reducer;