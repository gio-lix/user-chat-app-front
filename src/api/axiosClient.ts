import axios from "axios";

const POST = "http://localhost:9900"

const axiosClient = axios.create({
    baseURL: POST
})




export default axiosClient