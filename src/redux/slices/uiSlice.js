import { createSlice } from '@reduxjs/toolkit';
import { productThunk } from 'redux/thunks/productThunk';
import { DETAIL_ID, FEATURE_ID } from 'utils/constants/settingSystem';

const initialState = {
    theme: 'blue',
    isLoadingUI: 1,
    hideLoadingSkeleton: {},
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
    },
    extraReducers: (builder) => {
        builder
            // getProductByCategory skeleton UI
            .addCase(productThunk.getProductByCategory.pending, (state, { meta }) => {
                state.hideLoadingSkeleton[meta.arg] = false;
            })
            .addCase(productThunk.getProductByCategory.fulfilled, (state, { meta }) => {
                state.hideLoadingSkeleton[meta.arg] = true;
            })
            .addCase(productThunk.getProductByCategory.rejected, (state, { meta }) => {
                state.hideLoadingSkeleton[meta.arg] = true;
            })
            // getProductById skeleton UI
            .addCase(productThunk.getProductById.pending, (state) => {
                state.hideLoadingSkeleton[DETAIL_ID] = false;
            })
            .addCase(productThunk.getProductById.fulfilled, (state) => {
                state.hideLoadingSkeleton[DETAIL_ID] = true;
            })
            .addCase(productThunk.getProductById.rejected, (state) => {
                state.hideLoadingSkeleton[DETAIL_ID] = true;
            })
            // getProductByFeature skeleton UI
            .addCase(productThunk.getProductByFeature.pending, (state) => {
                state.hideLoadingSkeleton[FEATURE_ID] = false;
            })
            .addCase(productThunk.getProductByFeature.fulfilled, (state) => {
                state.hideLoadingSkeleton[FEATURE_ID] = true;
            })
            .addCase(productThunk.getProductByFeature.rejected, (state) => {
                state.hideLoadingSkeleton[FEATURE_ID] = true;
            });
    }
});

export const {
    setTheme,
    setScreenWidth
} = uiSlice.actions;

export default uiSlice.reducer;