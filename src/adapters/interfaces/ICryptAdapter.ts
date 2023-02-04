export interface ICryptPassword {
    password: string;
}

export interface IUnencryptedPassword {
    password: string;
    unencryptedPassword: string;
}

export interface ICryptAdapter {
    hashPassword: (data: ICryptPassword) => string;
    checkIfUnencryptedPasswordIsValid: (data: IUnencryptedPassword) => boolean;
}
