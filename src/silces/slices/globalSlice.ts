import {createSlice, PayloadAction} from "@reduxjs/toolkit";


const initialState = {
    people: false
}

type State = typeof initialState

const globalSlice = createSlice({
    name: "global",
    initialState,
    reducers: {
        setPeople: (state:State, action: PayloadAction<any>) => {
            state.people = action.payload
        }
    }
})

export const globalAction = globalSlice.actions
export default globalSlice.reducer