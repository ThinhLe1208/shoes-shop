import { createAsyncThunk } from "@reduxjs/toolkit";

import { usersService } from "services/usersService";

class UsersThunk {
    signUp = createAsyncThunk(
        'users/signUpAPI',
        async (payload) => {
            const response = await usersService.signUp(payload);
            return response.data.content;
        }
    );
    signIn = createAsyncThunk(
        'users/signInAPI',
        async (payload, { dispatch }) => {
            const response = await usersService.signIn(payload);
            dispatch(this.getProductfavorite(response?.data?.content?.accessToken));
            return response.data.content;
        }
    );
    facebooklogin = createAsyncThunk(
        'users/facebookloginAPI',
        async (payload) => {
            const response = await usersService.facebooklogin({ facebookToken: payload });
            return response.data.content;
        }
    );
    getProfile = createAsyncThunk(
        'users/getProfileAPI',
        async () => {
            const response = await usersService.getProfile();
            return response.data.content;
        }
    );
    updateProfile = createAsyncThunk(
        'users/updateProfileAPI',
        async (payload, { dispatch, getState, requestId }) => {
            const { currentRequestId, isLoading } = getState().users;
            // run a peding state in usersSlice first ?
            if (isLoading !== true || requestId !== currentRequestId) {
                return;
            }
            const response = await usersService.updateProfile(payload);
            dispatch(this.getProfile());
            return response.data.content;
            // try catch
            // return rejectWithValue(err.response.data);
        }
    );
    like = createAsyncThunk(
        'users/likeAPI',
        async (payload, { dispatch, getState, requestId }) => {
            const { currentRequestId, isLoading } = getState().users;
            if (isLoading !== true || requestId !== currentRequestId) {
                return;
            }
            const response = await usersService.like(payload);
            dispatch(this.getProductfavorite());
            return response.data.content;
        }
    );
    unlike = createAsyncThunk(
        'users/unlikeAPI',
        async (payload, { dispatch, getState, requestId }) => {
            const { currentRequestId, isLoading } = getState().users;
            if (isLoading !== true || requestId !== currentRequestId) {
                return;
            }
            const response = await usersService.unlike(payload);
            dispatch(this.getProductfavorite());
            return response.data.content;
        }
    );
    getProductfavorite = createAsyncThunk(
        'users/getProductfavoriteAPI',
        async (token) => {
            const response = await usersService.getProductfavorite(token);
            return response.data.content;
        }
    );
    order = createAsyncThunk(
        'users/orderAPI',
        async (payload, { dispatch, getState, requestId }) => {
            const { currentRequestId, isLoading, userLogin } = getState().users;
            const { cartList } = getState().cart;
            if (isLoading !== true || requestId !== currentRequestId) {
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
            return response.data.content;
        }
    );
    deleteOrder = createAsyncThunk(
        'users/facebookloginAPI',
        async (payload, { dispatch }) => {
            const response = await usersService.deleteOrder({ orderId: payload });
            dispatch(this.getProfile());
            return response.data.content;
        }
    );
}

export const usersThunk = new UsersThunk();