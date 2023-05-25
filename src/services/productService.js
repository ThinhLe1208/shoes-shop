import { http } from "./baseService";

class ProductService {
    getProductByKeyword = (keyword) => {
        let url = '/api/Product';
        if (keyword) {
            url += `?keyword=${keyword}`;
        }
        return http.get(url);
    };

    getProductByCategory = (categoryId) => {
        let url = '/api/Product/getProductByCategory';
        if (categoryId) {
            url += `?categoryId=${categoryId}`;
        }
        return http.get(url);
    };

    getProductByFeature = (feature) => {
        let url = '/api/Product/getProductByFeature';
        if (feature) {
            url += `?feature=${feature}`;
        }
        return http.get(url);
    };

    getAllCategory = (keyword) => {
        let url = '/api/Product/getAllCategory';
        if (keyword) {
            url += `?keyword=${keyword}`;
        }
        return http.get(url);
    };

    getPaging = (pageIndex, pageSize, keywords) => {
        let url = `/api/Product/getpaging?pageIndex=${pageIndex}&pageSize=${pageSize}`;
        if (keywords) {
            url += `&keywords=${keywords}`;
        }
        return http.get(url);
    };

    getProductById = (id) => {
        let url = '/api/Product/getbyid';
        if (id) {
            url += `?id=${id}`;
        }
        return http.get(url);
    };

    getAllStore = (keyword) => {
        let url = '/api/Product/getAllStore';
        if (keyword) {
            url += `?keyword=${keyword}`;
        }
        return http.get(url);
    };
}

export const productService = new ProductService();