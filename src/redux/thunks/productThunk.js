import { createAsyncThunk } from "@reduxjs/toolkit";

import { productService } from "services/productService";

class ProductThunk {
    // return an object with a keyword and a result list (for an input of the Slider component)
    getAllProductList = createAsyncThunk(
        'product/getAllProductListAPI',
        async () => {
            const response = await productService.getAllProductList();
            return response?.data?.content;
        }
    );

    // return a result directly
    searchProductName = createAsyncThunk(
        'product/searchProductNameAPI',
        async (keyword, { getState, requestId }) => {
            const { isLoadingProduct, currentRequestIdProduct } = getState().product;
            if (isLoadingProduct !== true || requestId !== currentRequestIdProduct) {
                return;
            }
            const response = await productService.getAllProductList(keyword);
            return response?.data?.content;
        }
    );

    getProductByCategory = createAsyncThunk(
        'product/getProductByCategoryAPI',
        async (categoryId) => {
            const response = await productService.getProductByCategory(categoryId);
            return {
                categoryId: categoryId,
                newProductByCategoryList: response?.data?.content
            };
        }
    );

    getProductByFeature = createAsyncThunk(
        'product/getProductByFeatureAPI',
        async (feature) => {
            const response = await productService.getProductByFeature(feature);
            return {
                feature: feature,
                newProductByFeatureList: response?.data?.content
            };
        }
    );

    getAllCategory = createAsyncThunk(
        'product/getAllCategoryAPI',
        async (keyword) => {
            const response = await productService.getAllCategory(keyword);
            return response?.data?.content;
        }
    );

    getPaging = createAsyncThunk(
        'product/getPagingAPI',
        async ({ pageIndex, pageSize, keywords } = {}) => {
            const response = await productService.getPaging(pageIndex, pageSize, keywords);
            return response?.data?.content;
        }
    );

    getProductById = createAsyncThunk(
        'product/getProductByIdAPI',
        async (id) => {
            const response = await productService.getProductById(id);
            return response?.data?.content;
        }
    );

    getAllStore = createAsyncThunk(
        'product/getAllStoreAPI',
        async (keyword) => {
            const response = await productService.getAllStore(keyword);
            return response?.data?.content;
        }
    );
}

export const productThunk = new ProductThunk();