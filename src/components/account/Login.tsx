import React, {useState} from 'react';
import s from "./Account.module.scss"

import FormContainer from "./FormContainer";

import {ContextType, ILogin} from "../../types/typing";
import {useOutletContext} from "react-router-dom";

import {useAppDispatch} from "../../silces/store";
import {validLogin} from "../../utils/validation";
import {fetchAuthLogin} from "../../silces/slices/authSlice";

import {toastAction} from "../../silces/slices/toastReducer";

const Login = () => {
    const dispatch = useAppDispatch()
    const [_,setAccount] = useOutletContext<ContextType>();
    const [user, setUser] = useState({} as ILogin)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        setUser({...user, [name]: value})
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const {errLength, errors} = validLogin(user)
        if (!!errLength) {
            return dispatch(toastAction.setToast(errors))
        }
        dispatch(fetchAuthLogin(user))
        dispatch(toastAction.setToast(null))
    }


    return (
        <FormContainer title="Login" handleSubmit={handleSubmit}>
            <form className={s.root} onSubmit={handleSubmit}>
                <label htmlFor="email">
                    <small>Email</small>
                    <input
                        type="email"
                        name="email"
                        value={user.email || ""}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="password">
                    <small>Password</small>
                    <input
                        type="password"
                        name="password"
                        value={user.password || ""}
                        onChange={handleChange}
                    />
                </label>
                <p>dont have an account? <span onClick={() => setAccount("register")}>Register</span></p>
            </form>
        </FormContainer>
    );
};

export default Login;