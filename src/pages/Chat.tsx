import React, {useEffect} from 'react';
import s from "../styles/pages/Char.module.scss"
import {useAppDispatch, useAppSelector} from "../silces/store";
import {fetchUsers} from "../silces/slices/usersSlice";
import SideBar from "../components/sidebar/SideBar";
import ChatRoom from "../components/chatRoom/ChatRoom";
import Aside from "../components/aside_menu/Aside";

const Chat = () => {
    const dispatch = useAppDispatch()
    const {auth} = useAppSelector(state => state.auth)

    useEffect(() => {
        if (!auth?._id) return
        dispatch(fetchUsers(auth?._id))
    }, [auth?._id, dispatch])
    return (
        <section className={s.root}>
            <SideBar/>
            <ChatRoom/>
            <Aside />
        </section>
    );
};

export default Chat;