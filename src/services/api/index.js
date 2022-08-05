const API = 'https://api.escuelajs.co';
const VERSION = 'v1';

const endPoints = {
    auth: {
        login: `${API}/api/${VERSION}/auth/login`,
        profile: `${API}/api/${VERSION}/auth/profile`,
    },
    products: {
        getAllProducts: `${API}/api/${VERSION}/products`,
        getProduct: (id) => `${API}/api/${VERSION}/products/${id}`
    },
    users: {
        getUsers: `${API}/api/${VERSION}/users?limit=10`,
        getUserAvailable: `${API}/api/${VERSION}/users/is-available`
    },
    files: {
        getFile: (filename) => `${API}/api/${VERSION}/files/${filename}`
    }
}

export default endPoints;