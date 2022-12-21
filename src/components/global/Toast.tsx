import React, {useEffect} from 'react';
import s from "../../styles/components/Toast.module.scss"
import {useAppDispatch, useAppSelector} from "../../silces/store";
import {toastAction} from "../../silces/slices/toastReducer";

const Toast = () => {
    const dispatch = useAppDispatch()
    const {toast} = useAppSelector(state => state.toast)

    useEffect(() => {
        if (!toast) return
        const timer  = setTimeout(() => {
            dispatch(toastAction.setToast(null))
        },5000)
        return () => clearTimeout(timer)
    },[toast])

    return (
        <article className={s.root}>
            {toast?.map((item: string, index: number) => (
                <p key={index}
                    style={{
                        transform: `${toast.length > 0 && `translateY(-${55 * toast.length}px)`}`
                    }}
                >
                    {item}
                </p>
            ))}
        </article>
    );
};

export default Toast;