import React from 'react';
import s from "./Sidebar.module.scss"

import {currentUser} from "../../silces/slices/currentUserToChat";
import {useAppSelector,useAppDispatch} from "../../silces/store";

import SkeletonUsers from "../global/SkeletonLoad";


const SideBar = () => {
    const dispatch = useAppDispatch()
    const {auth, users,chatToUser} = useAppSelector(state => state)
    const {users: allUsers,status} = users



    return (
        <div className={s.root}>
            <div className={s.auth_info_box}>
                <address>{auth?.auth?.email}</address>
                <figure className={s.image_box}>
                    <img src={auth?.auth?.avatarImage} alt="avatar"/>
                </figure>
            </div>
            <div className={s.auth_info_box}>
                <figure className={s.image_box}>
                    {chatToUser.user && (
                            <img src={chatToUser?.user?.avatarImage} alt="avatar"/>
                    )}
                </figure>
                <address>{chatToUser?.user?.email}</address>
            </div>

            <div  className={s.current_users_box}>
                {
                    status === "loading" ? (
                        [...new Array(10)].map((_, index: number) => (
                            <div key={index} style={{margin: "2px 0"}}>
                                <SkeletonUsers />
                            </div>
                        ))
                    ) : (
                        <div>
                            {allUsers?.map(user => (
                                <div
                                    onClick={() => dispatch(currentUser.setCurrentUser(user))}
                                    className={s.user_box} key={user?._id}>
                                    <figure >
                                        <img src={user?.avatarImage} alt="avatar"/>
                                    </figure>
                                    <p>{user?.email}</p>
                                </div>
                            ))}
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default SideBar;