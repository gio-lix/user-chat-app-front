import React from 'react';
import s from "./ChatRoom.module.scss"
import {useAppSelector} from "../../silces/store";
import ChatInput from "../chat/ChatInput";


const ChatRoom = () => {
    const {auth, chatToUser} = useAppSelector(state => state);


    const handleSubmit = () => {

    }

    return (
        <section className={s.root}>
            {!chatToUser.user ? (
                <div className={s.no_user}>
                    <h2>Hello</h2>
                    <i className="material-icons">
                        waving_hand
                    </i>
                    <p>Welcome, <span>{auth?.auth?.username}</span>  Chat</p>
                </div>
            ) : (
                <div className={s.user_chat}>
                    <ChatInput handler={handleSubmit} />
                </div>
            )}

        </section>
    );
};

export default ChatRoom;