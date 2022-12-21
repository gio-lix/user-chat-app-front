import React, {useState} from 'react';
import s from "./Account.module.scss"

import {ContextType, IRegister} from "../../types/typing";
import {useOutletContext} from "react-router-dom";

import FormContainer from "./FormContainer";

import {toastAction} from "../../silces/slices/toastReducer";

import {useAppDispatch} from "../../silces/store";
import {validation} from "../../utils/validation";
import {fetchAuth} from "../../silces/slices/authSlice";

const Register = () => {
    const dispatch = useAppDispatch()
    const [_,setAccount] = useOutletContext<ContextType>();
    const [user, setUser] = useState({} as IRegister)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value}= e.target
        setUser({...user,[name]: value})
    }
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const {errLength, errors} = validation(user)
        if (!!errLength) {
            return dispatch(toastAction.setToast(errors))
        }
        const {cf_password, ...arg} = user
        dispatch(fetchAuth(arg as IRegister))

        dispatch(toastAction.setToast(null))
    }


    return (
        <FormContainer title="Register" handleSubmit={handleSubmit}>
            <form onSubmit={handleSubmit} className={s.root}>
                <label htmlFor="username">
                    <small className={s.small}>Username</small>
                    <input
                        type="text"
                        name="username"
                        value={user.username || ""}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="email">
                    <small className={s.small}>Email</small>
                    <input
                        type="email"
                        name="email"
                        value={user.email || ""}
                        onChange={handleChange}
                    />
                </label>
                <label  htmlFor="password">
                    <small>Password</small>
                    <input
                        type="password"
                        name="password"
                        value={user.password || ""}
                        onChange={handleChange}
                    />
                </label>
                <label  htmlFor="cf_password">
                    <small>Confirm Password</small>
                    <input
                        type="password"
                        name="cf_password"
                        value={user.cf_password || ""}
                        onChange={handleChange}
                    />
                </label>
                <p>already have an account? <span onClick={() =>  setAccount("login")}>Login</span></p>
            </form>
        </FormContainer>

    );
};

export default Register;