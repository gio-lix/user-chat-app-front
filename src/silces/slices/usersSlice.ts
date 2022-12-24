import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";

import axiosClient from "../../api/axiosClient";

import {UserType} from "../../types/typing";



const initialState = {
    status: "loading",
    users: [] as UserType[] | []
}

type State = typeof initialState

export const fetchUsers = createAsyncThunk<UserType[], string>(
    "users/fetchUsers",
    async (id: string) => {
        try {
            const {data} = await axiosClient.get(`/api/allUsers/${id}`)
            return data
        } catch (err) {
            return err
        }
    })



const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: (builder) =>  {
        builder
            .addCase(fetchUsers.pending, (state:State) => {
                state.status = "loading"
            })
            .addCase(fetchUsers.fulfilled, (state:State, action:PayloadAction<UserType[]>) => {
                state.status = "loaded"
                state.users = action.payload
            })
    }
})


export default usersSlice.reducer