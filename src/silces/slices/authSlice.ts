import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import axiosClient from "../../api/axiosClient";
import {toastAction} from "./toastReducer";
import {ILogin, IRegister, UserType} from "../../types/typing";

const userExist = localStorage.getItem("chat_user_app")

interface State {
    status: string
    auth: UserType | null
    avatar: string
}

const initialState:State = {
    status: "loaded",
    auth: userExist ? JSON.parse(userExist) : null,
    avatar: ""
}


export const fetchAuth = createAsyncThunk<UserType, IRegister>(
    "auth/fetchAuth",
    async (value, {dispatch}) => {
        try {
            const {data} = await axiosClient.post("/api/auth/register", value)
            if (data.status === false) {
                dispatch(toastAction.setToast([data.msg]))
            }
            localStorage.setItem("chat_user_app", JSON.stringify(data.user))
            return data.user
        } catch (err) {
            return err
        }
    })
export const fetchAuthLogin = createAsyncThunk<UserType, ILogin>(
    "auth/fetchAuthLogin",
    async (value, {dispatch}) => {
        try {
            const {data} = await axiosClient.post("/api/auth/login", value)
            if (!data.status) {
                dispatch(toastAction.setToast([data.msg]))
            } else if (data.status) {
                localStorage.setItem("chat_user_app", JSON.stringify(data.user))
            }
            return data.user
        } catch (err) {
            return err
        }
    })


export const setAuthAvatar = createAsyncThunk<UserType, any>(
    "auth/setAuthAvatar",
    async (value, {dispatch, getState}) => {
        try {
            const {data} = await axiosClient.post(`/api/setAvatar/${value.authId}`, value)
            const {auth}: any = getState()
            const _updateAuth = auth.auth
            localStorage.setItem("chat_user_app", JSON.stringify({..._updateAuth,avatarImage: data.image}))
            return data
        } catch (err) {
            return err
        }
    })

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAvatar: (state: State, action: PayloadAction<string>) => {
            state.avatar = action.payload
        },
        reSetProfileAvatar: (state: State, action: PayloadAction<{ image: string}>) => {
            state.auth!.avatarImage = action.payload.image
        },
        setAvatarImageSet: (state: State, action: PayloadAction<UserType>) => {
            state.auth = action.payload
        },
        setLogout: (state: State) => {
            state.auth = null
        }
    },
    extraReducers: (builder) => {
        builder
            // register
            .addCase(fetchAuth.pending, (state: State) => {
                state.status = "loading"
            })
            .addCase(fetchAuth.fulfilled, (state: State, action: PayloadAction<UserType>) => {
                state.status = "loaded"
                state.auth = action.payload
            })
            // account
            .addCase(fetchAuthLogin.pending, (state: State) => {
                state.status = "loading"
            })
            .addCase(fetchAuthLogin.fulfilled, (state: State, action: PayloadAction<UserType>) => {
                state.status = "loaded"
                state.auth = action.payload
            })
            // set auth avatar
            .addCase(setAuthAvatar.pending, (state: State) => {
                state.status = "loading"
            })
            .addCase(setAuthAvatar.fulfilled, (state: State, action: PayloadAction<any>) => {
                state.status = "loaded"
                state.auth!.avatarImage = action.payload.image
            })

    }
})


export const authAction = authSlice.actions
export default authSlice.reducer