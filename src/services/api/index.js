const API = 'https://api.escuelajs.co';
const VERSION = 'v1';

const endPoints = {
    auth: {
        login: `${API}/api/${VERSION}/auth/login`,
        profile: `${API}/api/${VERSION}/auth/profile`,
    },
    products: {
        getProduct: (id) => `${API}/api/${VERSION}/products/${id}/`,
        getAllProduct:`${API}/api/${VERSION}/products/`,
        getProducts: (limit, offset) => `${API}/api/${VERSION}/products?limit=${limit}&offset=${offset}`,
        addProducts: `${API}/api/${VERSION}/products`,
        updateProduct: (id) => `${API}/api/${VERSION}/products/${id}/`,
        deleteProduct: (id) => `${API}/api/${VERSION}/products/${id}/`,
    },
    categories: {
        getCategoriesList: `${API}/api/${VERSION}/categories/`,
        addCategory: `${API}/api/${VERSION}/categories/`,
        getCategoryItems: (id) => `${API}/api/${VERSION}/categories/${id}/products/`,
        updateCategory: (id) => `${API}/api/${VERSION}/categories/${id}/`,
    },
    files: {
        addImage: `${API}/api/${VERSION}/files/upload/`,
    },
}

export default endPoints;