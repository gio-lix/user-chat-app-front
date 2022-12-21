import {ILogin, IRegister} from "../types/typing";




export function validation(value: IRegister) {
    const errors: string[] = []

    if (!value.username) {
        errors.push("Please add your user name.")
    } else if (value.username.toLowerCase().replace(/ /g, "").length < 3) {
        errors.push("User name is must be 3 characters long.")
    }

    if (!value.email) {
        errors.push("Please add your email.")
    } else if (!validateEmail(value.email)) {
        errors.push("Email format is incorrect.")
    }

    if (!value.password) {
        errors.push("Please add your password.")
    } else if (value.password.length <= 4) {
        errors.push("Password must be at least 4 characters.")
    }

    if (value.password !== value.cf_password) {
        errors.push("Password did not match.")
    }


    return {
        errors,
        errLength: errors.length
    }

}

export const validLogin = (value: ILogin) => {

    const errors: string[] = []
    if (!value.email) {
        errors.push("Please add your email.")
    } else if (!validateEmail(value.email)) {
        errors.push("Email format is incorrect.")
    }

    if (!value.password) {
        errors.push("Please add your password.")
    } else if (value.password.length <= 4) {
        errors.push("Password must be at least 4 characters.")
    }

    return {
        errors,
        errLength: errors.length
    }
}


function validateEmail(email: string) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}