import React, {useEffect, useState} from 'react';
import io from "socket.io-client";

import {Outlet, useNavigate} from "react-router-dom"

import {useAppDispatch, useAppSelector} from "../silces/store";
import SocketClient from "../SocketClient";

import {socketAction} from "../silces/slices/socketSlice";
import {POST} from "../api/axiosClient";
import Header from "../components/global/Header";


const AuthProvider = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const {auth} = useAppSelector(state => state.auth)

    const [account, setAccount] = useState("login")

    useEffect(() => {
        const socket = io(POST)
        dispatch(socketAction.setSocket(socket))
        return () => {
            socket.close()
        }
    }, [dispatch])

    useEffect(() => {

        if (!auth || (auth?.isAvatarImageSet === false)) {
            navigate("/")
            setAccount("login")
        } else {
            navigate("/chat")
        }
    }, [auth, auth?.isAvatarImageSet, navigate])


    return (
        <section className="container " style={{color: "white"}}>
            <SocketClient/>
            {auth && <Header />}
            <Outlet context={[account, setAccount]}/>
        </section>
    );
};

export default AuthProvider;