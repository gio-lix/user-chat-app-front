import React, {useEffect, useState} from 'react';
import {Outlet, useNavigate} from "react-router-dom"

import {useAppSelector} from "../silces/store";



const AuthProvider = () => {
    const navigate = useNavigate()
    const [account, setAccount] = useState("login")
    const {auth} = useAppSelector(state => state.auth)


    useEffect(() => {
        if (!auth || (auth?.isAvatarImageSet === false)) {
            navigate("/")
            setAccount("login")
        } else {
            navigate("/chat")
        }
    }, [auth, auth?.isAvatarImageSet])


    return (
        <section className="container " style={{color: "white"}}>
            <Outlet context={[account, setAccount]}/>
        </section>
    );
};

export default AuthProvider;