import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    socket: null as any
}
type State = typeof initialState
const socketSlice = createSlice({
    name: "socket",
    initialState,
    reducers: {
        setSocket: (state:State, action) => {
            state.socket = action.payload
        }
    }
})

export const socketAction = socketSlice.actions
export default socketSlice.reducer