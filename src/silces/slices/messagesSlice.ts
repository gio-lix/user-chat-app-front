import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import axiosClient from "../../api/axiosClient";
import {MessageType} from "../../types/typing";


interface State {
    status: string
    messages: MessageType[]
}

const initialState:State = {
    status: "loaded",
    messages: []
}

export const fetchMessages = createAsyncThunk<any, MessageType>(
    "messages/fetchMessages",
    async (value: MessageType) => {
        try {
            const {data} = await axiosClient.post("/api/messages/getall", value)
            console.log("data - ",data)
            return data
        } catch (err) {
            return err
        }
    })

const messagesSlice = createSlice({
    name:"messages",
    initialState,
    reducers: {
        setMessages: (state: State, action: PayloadAction<MessageType>) => {
            state.messages.push(action.payload)
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchMessages.pending, (state:State) => {
                state.status = "loading"
            })
            .addCase(fetchMessages.fulfilled, (state:State, action:PayloadAction<any>) => {
                state.status = "loaded"
                state.messages = action.payload
            })
    }
})


export const messageAction = messagesSlice.actions
export default messagesSlice.reducer