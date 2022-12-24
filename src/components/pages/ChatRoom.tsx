import React, {useEffect} from 'react';
import s from "../../styles/components/ChatRoom.module.scss"

import {useAppDispatch, useAppSelector} from "../../silces/store";
import {writeMessagesAction} from "../../silces/action/action-creators";

import ChatMessages from "../chat/ChatMessages";
import ChatInput from "../chat/ChatInput";
import {fetchMessages} from "../../silces/slices/messagesSlice";


const ChatRoom = () => {
    const dispatch = useAppDispatch()
    const {socket} = useAppSelector((state) => state.socket)
    const {auth} = useAppSelector((state) => state.auth)
    const {user} = useAppSelector((state) => state.chatToUser)



    useEffect( () => {
        dispatch(fetchMessages({ from: auth?._id!, to: user?._id!,}))
    },[user])

    const handleCallBack = async (value: string) => {

        dispatch(writeMessagesAction({
            from: auth?._id!,
            to: user?._id!,
            message: value
        },socket))
    }

    return (
        <section className={s.root}>
            <div>
                <ChatMessages />
            </div>
                {!user ? (
                    <div className={s.no_user}>
                        <h2>Hello</h2>
                        <i className="material-icons">
                            waving_hand
                        </i>
                        <p>Welcome, <span>{auth?.username}</span> Chat</p>
                    </div>
                ) : (
                    <div className={s.user_chat}>
                        <ChatInput callback={handleCallBack}/>
                    </div>
                )}
        </section>
    );
};

export default ChatRoom;