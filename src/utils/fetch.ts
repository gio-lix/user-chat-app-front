import axiosClient from "../api/axiosClient";

export const fetchPost = async <T>(url: string,value: T) => {
    const {data} = await axiosClient.post(`/api/${url}`, value)
    return data
}