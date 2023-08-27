import axios from "axios";

const SERVER_CONTEXT = "/SanThuongMaiDT";
const SERVER = "http://localhost:8090";

export const endpoints = {
    "categories": `${SERVER_CONTEXT}/api/categories/`,
    // "store": `${SERVER_CONTEXT}/api/store/10`
}

export default axios.create({
    baseURL: SERVER
})