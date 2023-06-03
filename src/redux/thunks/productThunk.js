import { createAsyncThunk } from "@reduxjs/toolkit";

import { productService } from "services/productService";

class ProductThunk {
    getProductByKeyword = createAsyncThunk(
        'productAPI/getProductByKeyword',
        async (keyword) => {
            const response = await productService.getProductByKeyword(keyword);
            return {
                keyword: keyword,
                data: response.data.content
            };
        }
    );

    getProductByCategory = createAsyncThunk(
        'productAPI/getProductByCategory',
        async (categoryId) => {
            const response = await productService.getProductByCategory(categoryId);
            return {
                categoryId: categoryId,
                data: response.data.content
            };
        }
    );

    getProductByFeature = createAsyncThunk(
        'productAPI/getProductByFeature',
        async (feature) => {
            const response = await productService.getProductByFeature(feature);
            return {
                feature: feature,
                data: response.data.content
            };
        }
    );

    getAllCategory = createAsyncThunk(
        'productAPI/getAllCategory',
        async (keyword) => {
            const response = await productService.getAllCategory(keyword);
            return response.data.content;
        }
    );

    getPaging = createAsyncThunk(
        'productAPI/getPaging',
        async ({ pageIndex, pageSize, keywords } = {}) => {
            const response = await productService.getPaging(pageIndex, pageSize, keywords);
            return response.data.content;
        }
    );

    getProductById = createAsyncThunk(
        'productAPI/getProductById',
        async (id) => {
            const response = await productService.getProductById(id);
            return response.data.content;
        }
    );

    getAllStore = createAsyncThunk(
        'productAPI/getAllStore',
        async (keyword) => {
            const response = await productService.getAllStore(keyword);
            return response.data.content;
        }
    );
}

export const productThunk = new ProductThunk();