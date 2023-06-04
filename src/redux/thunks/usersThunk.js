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
        async (payload) => {
            const response = await usersService.signIn(payload);
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
}

export const usersThunk = new UsersThunk();