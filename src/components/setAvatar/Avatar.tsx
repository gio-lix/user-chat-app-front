import React from 'react';

import s from "./Avatar.module.scss"

import {useAppDispatch, useAppSelector} from "../../silces/store";
import {setAuthAvatar, authAction} from "../../silces/slices/authSlice";
import {setAvatarImageSetAction} from "../../silces/action/action-creators";

import ImageOfAvatar from "./ImageOfAvatar";


const SetAvatar = () => {

    const dispatch = useAppDispatch()
    const {auth, avatar} = useAppSelector(state => state.auth)


    const handleClick = () => {
        if (auth?.avatarImage) {
            return dispatch(setAvatarImageSetAction(auth?._id))
        }

        dispatch(setAuthAvatar(
            {
                image: avatar,
                authId: auth?._id
            }))
    }


    const handleBack = () => {
        dispatch(authAction.reSetProfileAvatar({image: ``}))
    }

    return (
        <>
            <div className={s.root}>
                <div className={s.head}>
                    {avatar ? (
                        <div>
                            <img
                                width={70}
                                height={70}
                                src={avatar} alt="avatar"
                            />

                            <div className={s.set_avatar_box}>
                                <button onClick={handleClick}>{
                                    auth?.avatarImage
                                        ? "Enter to chat"
                                        : "set as Profile"
                                }</button>
                                {auth?.avatarImage && (
                                    <i className="material-icons">
                                        east
                                    </i>
                                )}
                            </div>
                            {auth?.avatarImage && (
                                <div className={s.avatar_back_box}>
                                    <>
                                        <button onClick={handleBack}>back to dashboard</button>
                                        <i className="material-icons">
                                            west
                                        </i>
                                    </>
                                </div>
                            )}
                        </div>
                    ) : (
                        <article className={s.avatar_info_box}>
                            <h4>Pick an avatar as your profile picture.</h4>
                            <i className="material-icons">
                                south
                            </i>
                        </article>
                    )
                    }
                </div>
                    {!auth?.avatarImage && (
                        <ImageOfAvatar/>
                    )}
            </div>
        </>
    );
};

export default SetAvatar;