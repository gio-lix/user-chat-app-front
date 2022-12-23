import React, {useEffect} from 'react';
import s from "../styles/pages/Char.module.scss"
import {useAppDispatch, useAppSelector} from "../silces/store";
import {fetchUsers} from "../silces/slices/usersSlice";
import SideBar from "../components/pages/SideBar";
import ChatRoom from "../components/pages/ChatRoom";
import Aside from "../components/pages/Aside";

const Chat = () => {
    const dispatch = useAppDispatch()
    const {auth} = useAppSelector(state => state.auth)

    useEffect(() => {
        if (!auth?._id) return
        dispatch(fetchUsers(auth?._id))
    }, [auth,auth?._id, dispatch])



    return (
        <section className={s.root}>
            <SideBar/>
            <ChatRoom/>
            <Aside />
        </section>
    );
};

export default Chat;