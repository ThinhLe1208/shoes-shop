import { createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';

import { productThunk } from 'redux/thunks/productThunk';

// finding matches between multiple array by id then sort that array
const mergeAndSortList = (type, ...sourceList) => {
    let resultList = _.intersectionBy(...sourceList, 'id');
    switch (type) {
        case 'name-ascending':
            resultList = _.sortBy(resultList, arr => arr.name);
            break;
        case 'name-descending':
            resultList = _.reverse(_.sortBy(resultList, arr => arr.name));
            break;
        case 'price-ascending':
            resultList = _.sortBy(resultList, arr => arr.price);
            break;
        case 'price-descending':
            resultList = _.reverse(_.sortBy(resultList, arr => arr.price));
            break;
        default:
    }
    return resultList;
};

const initialState = {
    allProductList: [],
    productListByCategory: {},
    featureProductList: [],
    categoryList: [],
    productById: null,
    // states of the search page
    searchResultList: [],
    filterResultList: [],
    finalResultList: [],
    sortBy: 'default',
    // other state
    isLoadingProduct: false,
    currentRequestIdProduct: undefined,
    // unused states
    pagingList: [],
    storeList: [],
};

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setSortBy: (state, { payload }) => {
            state.sortBy = payload;
        },
        setFilterResultListWithCategory: (state, { payload }) => { // payload: array of categories used to filter
            if (Array.isArray(payload)) {
                let newFilterResultList = payload?.reduce((result, item) => {
                    switch (item) {
                        case 'FEATURE':
                            return _.intersectionBy(result, _.cloneDeep(state.featureProductList), 'id');
                        default: // categoryList
                            return _.intersectionBy(result, _.cloneDeep(state.productListByCategory[item]), 'id');
                    }
                }, _.cloneDeep(state.allProductList));

                state.filterResultList = newFilterResultList;
                state.finalResultList = mergeAndSortList(state.sortBy, _.cloneDeep(state.searchResultList), _.cloneDeep(state.filterResultList));
            } else {
                state.finalResultList = _.cloneDeep(state.allProductList);
            }
        },
        // finalResultList state
        setFinalResultList: (state) => {
            state.finalResultList = mergeAndSortList(state.sortBy, _.cloneDeep(state.searchResultList), _.cloneDeep(state.filterResultList));
        }
    },
    extraReducers: (builder) => {
        builder
            // getAllProductList
            .addCase(productThunk.getAllProductList.fulfilled, (state, { payload }) => {
                state.allProductList = payload;
                state.searchResultList = payload;
                state.filterResultList = payload;
                state.finalResultList = payload;
            })
            // searchProductName
            .addCase(productThunk.searchProductName.pending, (state, { meta }) => {
                if (state.isLoadingProduct === false) {
                    state.isLoadingProduct = true;
                    state.currentRequestIdProduct = meta.requestId;
                }
            })
            .addCase(productThunk.searchProductName.fulfilled, (state, { payload, meta }) => {
                if (
                    state.isLoadingProduct === true &&
                    state.currentRequestIdProduct === meta.requestId
                ) {
                    state.isLoadingProduct = false;
                    state.currentRequestIdProduct = undefined;
                }
                state.searchResultList = payload;
                state.finalResultList = mergeAndSortList(state.sortBy, _.cloneDeep(state.searchResultList), _.cloneDeep(state.filterResultList));
            })
            .addCase(productThunk.searchProductName.rejected, (state, { meta }) => {
                if (
                    state.isLoadingProduct === true &&
                    state.currentRequestIdProduct === meta.requestId
                ) {
                    state.isLoadingProduct = false;
                    state.currentRequestIdProduct = undefined;
                }
            })
            // getProductByCategory
            .addCase(productThunk.getProductByCategory.fulfilled, (state, { payload }) => {
                if (payload.categoryId) {
                    state.productListByCategory = {
                        ...state.productListByCategory,
                        [payload.categoryId]: payload.data
                    };
                } else {
                    state.productListByCategory = {
                        ...state.productListByCategory,
                        default: payload.data
                    };
                }
            })
            // getProductByFeature
            .addCase(productThunk.getProductByFeature.fulfilled, (state, { payload }) => {
                if (payload.feature) {
                    state.featureProductList = payload.data;
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

export const {
    setSortBy,
    setSearchResultList,
    setFilterResultList,
    setFilterResultListWithCategory,
    setFinalResultList
} = productSlice.actions;

export default productSlice.reducer;