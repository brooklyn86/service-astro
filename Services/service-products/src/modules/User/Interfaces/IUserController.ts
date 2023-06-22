export interface ICryptPassword {
    password: string;
}

export interface IUnencryptedPassword {
    password: string;
    unencryptedPassword: string;
}
export interface ICreateUser {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    username: string
    accepted: boolean;
}

export interface IUserController {
    create: (data: ICreateUser) => void;
}
