import { createAsyncThunk } from "@reduxjs/toolkit";

import { usersService } from "services/usersService";

class UsersThunk {
    signUp = createAsyncThunk(
        'users/signUpAPI',
        async (payload) => {
            const response = await usersService.signUp(payload);
            return response?.data?.content;
        }
    );
    signIn = createAsyncThunk(
        'users/signInAPI',
        async (userInfoModel, { dispatch }) => {
            const response = await usersService.signIn(userInfoModel);
            dispatch(this.getProductfavorite(response?.data?.content?.accessToken));
            return response?.data?.content;
        }
    );
    facebooklogin = createAsyncThunk(
        'users/facebookloginAPI',
        async (facebookToken) => {
            const response = await usersService.facebooklogin({ facebookToken: facebookToken });
            return response?.data?.content;
        }
    );
    getProfile = createAsyncThunk(
        'users/getProfileAPI',
        async () => {
            const response = await usersService.getProfile();
            return response?.data?.content;
        }
    );
    updateProfile = createAsyncThunk(
        'users/updateProfileAPI',
        async (userInfoModel, { dispatch, getState, requestId }) => {
            const { currentRequestIdUsers, isLoadingUsers } = getState().users;
            // run a peding state in usersSlice first ? (mean isLoadingUsers state and currentRequestIdUsers state are aready updated in pending)
            if (isLoadingUsers !== true || requestId !== currentRequestIdUsers) {
                return;
            }
            const response = await usersService.updateProfile(userInfoModel);
            dispatch(this.getProfile());
            return response?.data?.content;
            // try catch
            // return rejectWithValue(err.response.data);
        }
    );
    like = createAsyncThunk(
        'users/likeAPI',
        async (productId, { dispatch, getState, requestId }) => {
            const { currentRequestIdUsers, isLoadingUsers } = getState().users;
            if (isLoadingUsers !== true || requestId !== currentRequestIdUsers) {
                return;
            }
            const response = await usersService.like(productId);
            dispatch(this.getProductfavorite());
            return response?.data?.content;
        }
    );
    unlike = createAsyncThunk(
        'users/unlikeAPI',
        async (productId, { dispatch, getState, requestId }) => {
            const { currentRequestIdUsers, isLoadingUsers } = getState().users;
            if (isLoadingUsers !== true || requestId !== currentRequestIdUsers) {
                return;
            }
            const response = await usersService.unlike(productId);
            dispatch(this.getProductfavorite());
            return response?.data?.content;
        }
    );
    getProductfavorite = createAsyncThunk(
        'users/getProductfavoriteAPI',
        async (token) => {
            const response = await usersService.getProductfavorite(token);
            return response?.data?.content;
        }
    );
    order = createAsyncThunk(
        'users/orderAPI',
        async (_, { dispatch, getState, requestId }) => {
            const { currentRequestIdUsers, isLoadingUsers, userLogin } = getState().users;
            const { cartList } = getState().cart;
            if (isLoadingUsers !== true || requestId !== currentRequestIdUsers) {
                return;
            }
            const orderDetailList = cartList?.map(item => ({
                productId: item?.id,
                quantity: item?.qty
            }));
            const response = await usersService.order({
                orderDetail: orderDetailList,
                email: userLogin.email
            });
            dispatch(this.getProfile());
            return response?.data?.content;
        }
    );
    deleteOrder = createAsyncThunk(
        'users/facebookloginAPI',
        async (orderId, { dispatch }) => {
            const response = await usersService.deleteOrder({ orderId: orderId });
            dispatch(this.getProfile());
            return response?.data?.content;
        }
    );
}

export const usersThunk = new UsersThunk();