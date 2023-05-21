import { createAsyncThunk } from "@reduxjs/toolkit";
import { productService } from "services/productService";

class ProductThunkAction {
    getProductByKeyword = createAsyncThunk(
        'productReducer/getProductByKeyword',
        async (keyword) => {
            const response = await productService.getProductByKeyword(keyword);
            return response.data.content;
        }
    );
    getProductByCategory = createAsyncThunk(
        'productReducer/getProductByCategory',
        async (categoryId) => {
            const response = await productService.getProductByCategory(categoryId);
            return response.data.content;
        }
    );
    getProductByFeature = createAsyncThunk(
        'productReducer/getProductByFeature',
        async (feature) => {
            const response = await productService.getProductByFeature(feature);
            return response.data.content;
        }
    );
    getAllCategory = createAsyncThunk(
        'productReducer/getAllCategory',
        async (keyword) => {
            const response = await productService.getAllCategory(keyword);
            return response.data.content;
        }
    );
    getPaging = createAsyncThunk(
        'productReducer/getPaging',
        async ({ pageIndex, pageSize, keywords } = {}) => {
            const response = await productService.getPaging(pageIndex, pageSize, keywords);
            return response.data.content;
        }
    );
    getProductById = createAsyncThunk(
        'productReducer/getProductById',
        async (id) => {
            const response = await productService.getProductById(id);
            return response.data.content;
        }
    );
    getAllStore = createAsyncThunk(
        'productReducer/getAllStore',
        async (keyword) => {
            const response = await productService.getAllStore(keyword);
            return response.data.content;
        }
    );
}

export const productThunkAction = new ProductThunkAction();