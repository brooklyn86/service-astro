export interface ICryptPassword {
    password: string;
}

export interface IUnencryptedPassword {
    password: string;
    unencryptedPassword: string;
}
export interface ICreateUser {
    email: string;
    password: string;
    name: string;
    username: string
}

export interface IUserController {
    create: (data: ICreateUser) => void;
    checkIfUnencryptedPasswordIsValid: (data: IUnencryptedPassword) => boolean;
}
