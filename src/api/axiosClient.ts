import axios from "axios";

export const POST = "https://user-app-chat.onrender.com"
// export const POST = "http://localhost:9900"

const axiosClient = axios.create({
    baseURL: POST
})




export default axiosClient