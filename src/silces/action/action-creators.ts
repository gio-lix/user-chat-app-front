import {AnyAction, ThunkAction} from "@reduxjs/toolkit";
import {RootState} from "../store";
import axiosClient from "../../api/axiosClient";
import {useNavigate} from "react-router-dom";
import {authAction} from "../slices/authSlice";


type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AnyAction>;
export const setAvatarImageSet = (authId:string): AppThunk =>
    async (dispatch) => {
            try {
                const {data} = await axiosClient.post(`/api/setAvatar/setImage/${authId}`, {authId})
                dispatch(setAvatarImageSet(data.user))
                localStorage.setItem("chat_user_app", JSON.stringify(data.user))
            } catch (err: any) {
                console.log(err)
            }
    }

export const authLogout = (navigate: any): AppThunk =>
    (dispatch) => {
        localStorage.clear()
        navigate("/")
        dispatch(authAction.setLogout())
    }