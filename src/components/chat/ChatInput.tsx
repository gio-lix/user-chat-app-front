import React, {FC, lazy, Suspense, useState} from 'react';
import clsx from "clsx";

import s from "./ChatInput.module.scss"

const Picker = lazy(() => import("emoji-picker-react"))

interface Props {
    callback: (value: string) => void
}

const ChatInput:FC<Props> = ({callback}) => {
    const [emojiOpen, setEmojiOpen] = useState<boolean>(false)
    const [message, setMessage] = useState<string>("")


    const handleEmojiPicker = (event: any) => {
        let msg = message
        msg += event.emoji
        setMessage(msg)
    }


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (message.length === 0) return

        callback(message)
        setMessage("")
        setEmojiOpen(false)

    }

    return (
        <form onSubmit={handleSubmit} className={clsx(s.chat_input)}>
            <textarea
                onChange={(e) => setMessage(e.target.value)}
                name="message"
                placeholder="Write something..."
                value={message}
            />
            <button type="submit">
                <i className="material-icons">
                    send
                </i>
            </button>
            <span onClick={() => setEmojiOpen(!emojiOpen)} role="icon">😀</span>
            <div className={s.emoji}>
                {emojiOpen ? <Suspense fallback={<Loading/>}>
                    <Picker
                        onEmojiClick={handleEmojiPicker}
                        width={500}
                        height={370}
                        skinTonesDisabled={false}
                    />
                </Suspense> : null}
            </div>
        </form>
    );
};

export default ChatInput;

export const Loading = () => {
    return (
        <div className="flex flex-jc-c flex-ai-c" style={{
            width:"500px",
            height:"370px",
        }}>
            Loading...
        </div>
    )
}