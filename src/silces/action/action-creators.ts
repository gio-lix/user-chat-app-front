import {AnyAction, ThunkAction} from "@reduxjs/toolkit";
import {RootState} from "../store";
import {authAction} from "../slices/authSlice";

import axiosClient from "../../api/axiosClient";
import {messageAction} from "../slices/messagesSlice";
import {MessageType} from "../../types/typing";


type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AnyAction>;
export const setAvatarImageSetAction = (authId:string): AppThunk =>
    async (dispatch) => {
            try {
                const {data} = await axiosClient.post(`/api/setAvatar/setImage/${authId}`, {authId})
                dispatch(authAction.setAvatarImageSet(data.user))
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



export const writeMessagesAction = (data: MessageType,socket: any): AppThunk =>
    async (dispatch:any) => {
        dispatch(messageAction.setMessages(data))
        socket.emit("sendMsg", data)
        try {
            await axiosClient.post("/api/messages/create", data)
        } catch (err: any) {
            console.log(err)
        }
    }