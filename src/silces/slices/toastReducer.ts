import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState = {
    toast: null as string[] | null
}
type State = typeof initialState

const toastReducer = createSlice({
    name: "toast",
    initialState,
    reducers: {
        setToast: (state: State, action: PayloadAction<string[] | null>) => {
            state.toast = action.payload
        }
    }
})

export const toastAction = toastReducer.actions
export default toastReducer.reducer