import { createAsyncThunk } from "@reduxjs/toolkit";

import { usersService } from "services/usersService";

class UsersThunk {
    signUp = createAsyncThunk(
        'usersAPI/signUp',
        async (payload) => {
            const response = await usersService.signUp(payload);
            return response.data.content;
        }
    );
    signIn = createAsyncThunk(
        'usersAPI/signIn',
        async (payload) => {
            const response = await usersService.signIn(payload);
            return response.data.content;
        }
    );
    getProfile = createAsyncThunk(
        'usersAPI/getProfile',
        async () => {
            const response = await usersService.getProfile();
            return response.data.content;
        }
    );
    updateProfile = createAsyncThunk(
        'usersAPI/updateProfile',
        async (payload, { dispatch, rejectWithValue }) => {
            try {
                const response = await usersService.updateProfile(payload);
                dispatch(this.getProfile());
                return response.data.content;
            } catch (err) {
                return rejectWithValue(err.response.data);
            }
        }
    );
}

export const usersThunk = new UsersThunk();