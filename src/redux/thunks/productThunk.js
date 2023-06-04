import { createAsyncThunk } from "@reduxjs/toolkit";

import { productService } from "services/productService";

class ProductThunk {
    getProductByKeyword = createAsyncThunk(
        'product/getProductByKeywordAPI',
        async (keyword) => {
            const response = await productService.getProductByKeyword(keyword);
            return {
                keyword: keyword,
                data: response.data.content
            };
        }
    );

    getProductByCategory = createAsyncThunk(
        'product/getProductByCategoryAPI',
        async (categoryId) => {
            const response = await productService.getProductByCategory(categoryId);
            return {
                categoryId: categoryId,
                data: response.data.content
            };
        }
    );

    getProductByFeature = createAsyncThunk(
        'product/getProductByFeatureAPI',
        async (feature) => {
            const response = await productService.getProductByFeature(feature);
            return {
                feature: feature,
                data: response.data.content
            };
        }
    );

    getAllCategory = createAsyncThunk(
        'product/getAllCategoryAPI',
        async (keyword) => {
            const response = await productService.getAllCategory(keyword);
            return response.data.content;
        }
    );

    getPaging = createAsyncThunk(
        'product/getPagingAPI',
        async ({ pageIndex, pageSize, keywords } = {}) => {
            const response = await productService.getPaging(pageIndex, pageSize, keywords);
            return response.data.content;
        }
    );

    getProductById = createAsyncThunk(
        'product/getProductByIdAPI',
        async (id) => {
            const response = await productService.getProductById(id);
            return response.data.content;
        }
    );

    getAllStore = createAsyncThunk(
        'product/getAllStoreAPI',
        async (keyword) => {
            const response = await productService.getAllStore(keyword);
            return response.data.content;
        }
    );
}

export const productThunk = new ProductThunk();