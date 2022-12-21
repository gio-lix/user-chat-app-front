import React, {FC, lazy, Suspense, useState} from 'react';
import clsx from "clsx";

import s from "./ChatInput.module.scss"

const Picker = lazy(() => import("emoji-picker-react"))

interface Props {
    handler?: () => void
}

const ChatInput: FC<Props> = ({ handler}) => {
    const [emojiOpen, setEmojiOpen] = useState(false)
    const [message, setMessage] = useState("")


    const handleEmojiPicker = (event:any, emoji: any) => {
        let msg = message
        msg += event.emoji
        setMessage(msg)
    }

    return (
        <form className={clsx(s.chat_input)}>
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