import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    theme: 'blue',
    isLoadingUI: false,
    screenWidth: 1440
};

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        setTheme: (state, { payload: theme }) => {
            state.theme = theme;
        },
        setScreenWidth: (state, { payload: screenWidth }) => {
            state.screenWidth = screenWidth;
        }
    }
});

export const {
    setTheme,
    setScreenWidth
} = uiSlice.actions;

export default uiSlice.reducer;