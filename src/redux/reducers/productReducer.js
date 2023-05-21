import { createSlice } from '@reduxjs/toolkit';
import { productThunkAction } from 'redux/thunkActions/productThunkAction';

const initialState = {
    productByKeywordList: [],
    productByCategoryList: [],
    productByFeatureList: [],
    categoryList: [],
    pagingList: [],
    productByIdList: [],
    storeList: []
};

const productReducer = createSlice({
    name: 'productReducer',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // getProductByKeyword
        builder.addCase(productThunkAction.getProductByKeyword.fulfilled, (state, { payload }) => {
            state.productByKeywordList = payload;
        });
        // getProductByCategory
        builder.addCase(productThunkAction.getProductByCategory.fulfilled, (state, { payload }) => {
            state.productByCategoryList = payload;
        });
        // getProductByFeature
        builder.addCase(productThunkAction.getProductByFeature.fulfilled, (state, { payload }) => {
            state.productByFeatureList = payload;
        });
        // getAllCategory
        builder.addCase(productThunkAction.getAllCategory.fulfilled, (state, { payload }) => {
            state.categoryList = payload;
        });
        // getPaging
        builder.addCase(productThunkAction.getPaging.fulfilled, (state, { payload }) => {
            state.pagingList = payload;
        });
        // getProductById
        builder.addCase(productThunkAction.getProductById.fulfilled, (state, { payload }) => {
            state.productByIdList = payload;
        });
        // getAllStore
        builder.addCase(productThunkAction.getAllStore.fulfilled, (state, { payload }) => {
            state.storeList = payload;
        });
    }
});

// export const { } = productReducer.actions;

export default productReducer.reducer;