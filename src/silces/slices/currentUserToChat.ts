import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {UserType} from "../../types/typing";


const initialState = {
    user: null as UserType | null
}

type State = typeof initialState

const currentUserToChatSlice = createSlice({
    name: "chat",
    initialState,
    reducers: {
        setCurrentUser: (state:State, action: PayloadAction<UserType>) => {
            state.user = action.payload
        }
    }
})


export const currentUser = currentUserToChatSlice.actions
export default currentUserToChatSlice.reducer