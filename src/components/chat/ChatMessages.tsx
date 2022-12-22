import React from 'react';
import s from "./ChatInput.module.scss"
import {useAppSelector} from "../../silces/store";

const ChatMessages = () => {
    const {messages} = useAppSelector(state => state.messages);

    return (
        <div className={s.chat_messages}>
            {messages?.map((message: any, index: number) => (
                <div style={{
                    alignItems: message?.fromSelf ? "flex-end" : "flex-start",
                }} className={s.msg_content} key={index}>
                    <p  style={{
                        backgroundColor: message?.fromSelf ? "#5f4383" : ""
                    }}>{message?.message}</p>
                </div>
            ))}
        </div>
    );
};

export default ChatMessages;