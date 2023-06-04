import { createSlice } from '@reduxjs/toolkit';
import { productThunk } from 'redux/thunks/productThunk';

const initialState = {
    productByKeywordList: {},
    productByCategoryList: {},
    saleProductList: [],
    categoryList: [],
    pagingList: [],
    productById: {},
    storeList: []
};

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // getProductByKeyword
            .addCase(productThunk.getProductByKeyword.fulfilled, (state, { payload }) => {
                if (payload.keyword) {
                    state.productByKeywordList = {
                        ...state.productByKeywordList,
                        [payload.keyword]: payload.data
                    };
                } else {
                    state.productByKeywordList = {
                        ...state.productByKeywordList,
                        default: payload.data
                    };
                }
            })
            // getProductByCategory
            .addCase(productThunk.getProductByCategory.fulfilled, (state, { payload }) => {
                if (payload.categoryId) {
                    state.productByCategoryList = {
                        ...state.productByCategoryList,
                        [payload.categoryId]: payload.data
                    };
                } else {
                    state.productByCategoryList = {
                        ...state.productByCategoryList,
                        default: payload.data
                    };
                }
            })
            // getProductByFeature
            .addCase(productThunk.getProductByFeature.fulfilled, (state, { payload }) => {
                if (payload.feature) {
                    state.saleProductList = payload.data;
                }
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