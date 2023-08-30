import axios from "axios";
import cookie from "react-cookies";


const SERVER_CONTEXT = "/SanThuongMaiDT";
const SERVER = "http://localhost:8090";

export const endpoints = {
    "categories": `${SERVER_CONTEXT}/api/categories/`,
    "login": `${SERVER_CONTEXT}/api/login/`,
    "current-user": `${SERVER_CONTEXT}/api/current-user/`,
    "register": `${SERVER_CONTEXT}/api/users/`,
    "products": `${SERVER_CONTEXT}/api/products/`,
    "store-info": (storeId) =>`${SERVER_CONTEXT}/api/store-info/${storeId}`,
    "store-cate": (storeId) =>`${SERVER_CONTEXT}/api/store-categories/${storeId}`,
    "store-products": (storeId) =>`${SERVER_CONTEXT}/api/store-products/${storeId}`,
    "create-store": `${SERVER_CONTEXT}/api/create-store/`
}

export const authApis = () => {
    return axios.create({
        baseURL: SERVER,
        headers: {
            "Authorization": cookie.load("token")
        }
    });
}

export default axios.create({
    baseURL: SERVER
})