import {createSlice, PayloadAction} from "@reduxjs/toolkit";


const initialState = {
    users_sidebar_show: false
}

type State = typeof initialState

const globalSlice = createSlice({
    name: "global",
    initialState,
    reducers: {
        setPeople: (state:State, action: PayloadAction<any>) => {
            state.users_sidebar_show = action.payload
        }
    }
})

export const globalAction = globalSlice.actions
export default globalSlice.reducer