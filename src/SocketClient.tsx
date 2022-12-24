import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "./silces/store";
import {messageAction} from "./silces/slices/messagesSlice";

const SocketClient = () => {
    const dispatch = useAppDispatch()
    const {socket} = useAppSelector((state) => state.socket)
    const {auth} = useAppSelector((state) => state.auth)
    const {user} = useAppSelector((state) => state.chatToUser)

    useEffect(() => {
        if (!socket || !auth) return
        socket.emit("joinUser", auth._id)
    }, [socket, auth?._id, auth])

    useEffect(() => {
        if (!socket || !auth) return
        socket.on("msgReceive", (message: any) => {
            console.log("message-receiver-",message )
            dispatch(messageAction.setMessages({message, from: user?._id!}))
        })
    },[socket])

    return (
        <>
        </>
    );
};

export default SocketClient;