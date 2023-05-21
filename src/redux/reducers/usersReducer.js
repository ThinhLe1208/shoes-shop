import { createSlice } from '@reduxjs/toolkit';

const initialState = {

};

const usersReducer = createSlice({
    name: 'usersReducer',
    initialState,
    reducers: {}
});

export const { } = usersReducer.actions;

export default usersReducer.reducer;