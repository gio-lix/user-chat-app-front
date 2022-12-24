import React from 'react';
import {useNavigate} from "react-router-dom";

import s from "../../styles/components/Header.module.scss"

import {useAppSelector, useAppDispatch} from "../../silces/store";
import {globalAction} from "../../silces/slices/globalSlice";
import {authLogout} from "../../silces/action/action-creators";

const Header = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const {users_sidebar_show} = useAppSelector(state => state.global)


    return (
        <div className={s.root}>
            <p onClick={() => dispatch(globalAction.setPeople(!users_sidebar_show))}>
                <i className="material-icons">
                    people_alt
                </i>
            </p>
            <p onClick={() => dispatch(authLogout(navigate))}>
                <i className="material-icons">
                    logout
                </i>
            </p>
        </div>
    );
};

export default Header;