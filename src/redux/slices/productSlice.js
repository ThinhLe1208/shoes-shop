import { createSlice } from '@reduxjs/toolkit';
import { productThunk } from 'redux/thunks/productThunk';

const initialState = {
    productByKeywordList: [],
    productByCategoryList: [],
    productByFeatureList: [],
    categoryList: [],
    pagingList: [],
    productById: {},
    storeList: []
};

const productSlice = createSlice({
    name: 'productSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // getProductByKeyword
            .addCase(productThunk.getProductByKeyword.fulfilled, (state, { payload }) => {
                state.productByKeywordList = payload;
            })
            // getProductByCategory
            .addCase(productThunk.getProductByCategory.fulfilled, (state, { payload }) => {
                state.productByCategoryList = payload;
            })
            // getProductByFeature
            .addCase(productThunk.getProductByFeature.fulfilled, (state, { payload }) => {
                state.productByFeatureList = payload;
            })
            // getAllCategory
            .addCase(productThunk.getAllCategory.fulfilled, (state, { payload }) => {
                state.categoryList = payload;
            })
            // getPaging
            .addCase(productThunk.getPaging.fulfilled, (state, { payload }) => {
                state.pagingList = payload;
            })
            // getProductById
            .addCase(productThunk.getProductById.fulfilled, (state, { payload }) => {
                state.productById = payload;
            })
            // getAllStore
            .addCase(productThunk.getAllStore.fulfilled, (state, { payload }) => {
                state.storeList = payload;
            });
    }
});

// export const { } = productSlice.actions;

export default productSlice.reducer;