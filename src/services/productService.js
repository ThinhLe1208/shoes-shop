const { http } = require("./baseService");

class ProductService {
    getProductByKeyword = (keyword) => http.get(`/api/Product${keyword ? `?keyword=${keyword}` : ''}`);

    getProductByCategory = (categoryId) => http.get(`/api/Product/getProductByCategory${categoryId ? `?categoryId=${categoryId}` : ''}`);

    getProductByFeature = (feature) => http.get(`/api/Product/getProductByFeature${feature ? `?feature=${feature}` : ''}`);

    getAllCategory = (keyword) => http.get(`/api/Product/getAllCategory${keyword ? `?keyword=${keyword}` : ''}`);

    getPaging = (pageIndex, pageSize, keywords) => http.get(`/api/Product/getpaging${pageIndex ? `?pageIndex=${pageIndex}` : ''}${pageSize ? `&pageSize=${pageSize}` : ''}${keywords ? `&keywords=${keywords}` : ''}`);

    getProductById = (id) => http.get(`/api/Product/getbyid${id ? `?id=${id}` : ''}`);

    getAllStore = (keyword) => http.get(`/api/Product/getAllStore${keyword ? `?keyword=${keyword}` : ''}`);

}

export const productService = new ProductService();