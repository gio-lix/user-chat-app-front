import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import axiosClient from "../../api/axiosClient";
import {MessageType} from "../../types/typing";

const initialState = {
    status: "loaded",
    messages: []
}

type State = typeof initialState
export const fetchMessages = createAsyncThunk<any, MessageType>(
    "messages/fetchMessages",
    async (value: MessageType) => {
        try {
            const {data} = await axiosClient.post("/api/messages/getall", value)
            return data
        } catch (err) {
            return err
        }
    })

const messagesSlice = createSlice({
    name:"messages",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMessages.pending, (state:State) => {
                state.status = "loading"
            })
            .addCase(fetchMessages.fulfilled, (state:State, action:PayloadAction<any>) => {
                state.status = "loaded"
                console.log("action.payload - ",action.payload)
                state.messages = action.payload
            })
    }
})


export const messageAction = messagesSlice.actions
export default messagesSlice.reducer