import React from 'react';
import {useOutletContext} from "react-router-dom";
import {ContextType} from "../types/typing";

import {useAppSelector} from "../silces/store";

import SetAvatar from "../components/setAvatar/Avatar";
import Login from "../components/account/Login";
import Register from "../components/account/Register";

const Account = () => {
    const [account] = useOutletContext<ContextType>();
    const {auth} = useAppSelector(state => state.auth)

    return (
        <section>
            {!auth && (
                <>
                    {account === "login" ? <Login/> : <Register/>}
                </>
            )}
            <SetAvatar/>
        </section>
    );
};
export default Account;

// export default Account;