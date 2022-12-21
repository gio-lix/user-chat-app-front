import axios from "axios";

const POST = "https://user-app-chat.onrender.com"
// const POST = "http://localhost:9900"

const axiosClient = axios.create({
    baseURL: POST
})




export default axiosClient