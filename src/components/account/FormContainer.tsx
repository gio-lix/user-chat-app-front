import React, {FC} from 'react';
import s from "../../styles/components/Form.module.scss"
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