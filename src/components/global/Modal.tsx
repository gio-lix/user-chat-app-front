import React, {FC, memo} from 'react';
import clsx from "clsx";

import s from "../../styles/components/Modal.module.scss"

interface Props {
    text: string
    open: boolean
    setOpen: (value: boolean) => void
    handleFunction:  (value: string) => void
}


const Modal:FC<Props> = ({open,setOpen,handleFunction,text}) => {

    const handleClose = () => {
        setOpen(false)
        handleFunction("no")
    }
    const handler = () => {
        setOpen(false)
        handleFunction("yes")
    }

    return (
        <div className={clsx(s.root, open ? s.open_modal : null)}>
            <span/>
            <div>
                <h3>{text}</h3>
                <div className={s.button_box}>
                    <button  onClick={handler}>
                        Yes
                    </button>
                    <button  onClick={handleClose}>
                        No
                    </button>
                </div>
            </div>
        </div>
    );
};

export default memo(Modal);