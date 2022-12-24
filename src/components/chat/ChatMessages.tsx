import React, {useEffect, useRef} from 'react';
import s from "../../styles/components/ChatInput.module.scss"
import {useAppSelector} from "../../silces/store";

const ChatMessages = () => {
    const ref = useRef<HTMLDivElement>(null)
    const {messages} = useAppSelector(state => state.messages);
    const {auth} = useAppSelector(state => state.auth)

    useEffect(() => {
        if (!ref.current) return
        ref.current.scrollIntoView({behavior: "smooth"})
    },[messages ])


    return (
        <div className={s.chat_messages}>
            {messages?.map((message, index: number) => (
                <div style={{
                    alignItems: message.from === auth?._id ? "flex-end" : "flex-start",
                }} className={s.msg_content} key={index}>
                    <p  style={{
                        backgroundColor: message.from === auth?._id ? "#5f4383" : ""
                    }}>{message?.message}</p>
                </div>
            ))}
            <div ref={ref} />
        </div>
    );
};

export default ChatMessages;