import React, {useEffect} from 'react';
import {useAppSelector} from "./silces/store";

const SocketClient = () => {
    const {socket} = useAppSelector((state) => state.socket)
    const {auth} = useAppSelector((state) => state.auth)

    useEffect(() => {
        if (!socket || !auth) return
        socket.emit("joinUser", auth._id)
    }, [socket, auth?._id, auth])

    return (
        <>

        </>
    );
};

export default SocketClient;