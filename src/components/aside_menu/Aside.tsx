import React, {useState} from 'react';
import clsx from "clsx";
import s from "./AsideMenu.module.scss"

import {useNavigate} from "react-router-dom";

import ImageOfAvatar from "../setAvatar/ImageOfAvatar";

import Modal from "../global/Modal";
import {data} from "../../data"

import {useAppDispatch} from "../../silces/store";
import {authLogout} from "../../silces/action/action-creators";

interface IOpen {
    open_menu: boolean
    open_avatar: boolean
    open_search: boolean
    open_about: boolean
}

const Aside = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const [closeModal, seCloseModal] = useState<boolean>(false)
    const [open, setOpen] = useState<IOpen>({
        open_menu: false,
        open_avatar: false,
        open_search: false,
        open_about: false
    })


    const handleLogout = (value: string) => {
        if (value === "no") return
        dispatch(authLogout(navigate))
    }

    const handleOpenCloseBar = (t: string) => {
        let obj = Object.entries(open)
        if (t === "open_menu") {
            if (!Object.values(open).includes(true)) {
                return setOpen({...open, open_menu: !open.open_menu})
            }
            if (Object.values(open).includes(true)) {
                for (let value of obj) {
                    value[1] = false
                }
            }
            setOpen(Object.fromEntries(obj) as any)
            return
        }
        for (let value of obj) {
            if (value[0] === t) {
                value[1] = !value[1]
            } else {
                value[1] = false
            }
        }
        setOpen(Object.fromEntries(obj) as any)
    }


    return (
        <div className={s.root}>
            <Modal
                text="Do you want to logout?"
                open={closeModal}
                setOpen={seCloseModal}
                handleFunction={handleLogout}
            />
            <div className={clsx(Object.values(open).includes(true) ? s.open_aside : "")}>
                <p data-title={(
                    open.open_menu
                    || open.open_avatar
                    || open.open_about
                ) ? "close" : "open"}>
                    <i onClick={() => handleOpenCloseBar("open_menu")} className="material-icons">
                        keyboard_arrow_left
                    </i>
                </p>
                <p onClick={() => seCloseModal(true)} data-title="logout">
                    <i className="material-icons">
                        logout
                    </i>
                </p>
                <p  onClick={() => handleOpenCloseBar("open_avatar")}
                    data-title="avatars">
                    <i className="material-icons">
                        mood
                    </i>
                </p>
                <p onClick={() => handleOpenCloseBar("open_about")}
                    data-title="info">
                    <i className="material-icons">
                        info
                    </i>
                </p>


                <div className={clsx(s.aside_box, open.open_about ? s.active_side : null)}>
                    <div className="inherit" dangerouslySetInnerHTML={{__html: data}}/>
                </div>
                <div className={clsx(s.aside_box, open.open_avatar ? s.active_side : null)}>
                    <ImageOfAvatar/>
                </div>

            </div>
        </div>
    );
};

export default Aside;