export interface ILogin {
    email: string
    password: string
}

export interface IRegister extends ILogin{
    username: string
    cf_password: string
}

export interface UserType {
    _id: string
    avatarImage: string
    createdAt: string
    updatedAt: string
    email: string
    isAvatarImageSet: boolean
    password: string
    username: string

}


export type ContextType = [account: string, setAccount: Function];