import React, {FC, useState} from 'react';
import s from "../../styles/components/Form.module.scss"
import {ILogin} from "../../types/typing";
import {validLogin} from "../../utils/validation";
import {toastAction} from "../../silces/slices/toastReducer";
import {fetchAuthLogin} from "../../silces/slices/authSlice";
import {useAppDispatch} from "../../silces/store";
import Toast from "../global/Toast";

interface Props {
    children: React.ReactNode
    title: string
    handleSubmit: any
}

const FormContainer: FC<Props> = ({children, title,handleSubmit}) => {
    return (
        <section className={s.root}>
            <div>
                <h2>{title}</h2>
                <div>
                    {children}
                </div>
                <button onClick={handleSubmit}>Submit</button>
            </div>
            <Toast />
        </section>
    );
};

export default FormContainer;