import axios from "axios";

export const POST = "https://user-app-chat.onrender.com"


const axiosClient = axios.create({
    baseURL: POST
})


export default axiosClient