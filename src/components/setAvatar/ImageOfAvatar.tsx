import React from 'react';
import s from "./Avatar.module.scss";
import {useAppDispatch} from "../../silces/store";
import {sprites} from "../../utils/global";
import {authAction} from "../../silces/slices/authSlice";

const ImageOfAvatar = () => {
    const dispatch = useAppDispatch()

    return (
        <div className={s.avatar}>
            {sprites.map(item => (
                    <img
                        key={item}
                        onClick={() => dispatch(authAction.setAvatar(`https://avatars.dicebear.com/api/male/${item}.svg`))}
                        src={`https://avatars.dicebear.com/api/male/${item}.svg`}
                        width={80}
                        height={80}
                        alt="img"
                    />
            ))}
        </div>
    );
};

export default ImageOfAvatar;