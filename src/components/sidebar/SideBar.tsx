import React from 'react';
import s from "./Sidebar.module.scss"

import {currentUser} from "../../silces/slices/currentUserToChat";
import {useAppSelector,useAppDispatch} from "../../silces/store";

import SkeletonUsers from "../global/SkeletonLoad";


const SideBar = () => {
    const dispatch = useAppDispatch()
    const {auth} = useAppSelector(state => state.auth)
    const {user } = useAppSelector(state => state.chatToUser)
    const {users,status } = useAppSelector(state => state.users)





    return (
        <div className={s.root}>
            <div className={s.auth_info_box}>
                <address>{auth?.email}</address>
                <figure className={s.image_box}>
                    <img src={auth?.avatarImage} alt="avatar"/>
                </figure>
            </div>
            <div className={s.auth_info_box}>
                <figure className={s.image_box}>
                    {user && (
                            <img src={user?.avatarImage} alt="avatar"/>
                    )}
                </figure>
                <address>{user?.email}</address>
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
                            {users?.map(user => (
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