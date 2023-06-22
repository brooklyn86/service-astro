export interface ICreateUserData {
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    password: string;
    accepted: boolean;
}
export interface IUpdateUserData {
    id: string;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    password: string;
    accepted: boolean;
}
export interface IDeleteUserData {
    id: string;
}
export interface IFindUserData {
    id?: string;
    username?: string;
    email?: string;
}

export interface IFindManyUserData {
    query: any
}
export interface IIsUniqueEmail {
    email: string;
}
export interface IIsUniqueUsername {
    username: string;
}
export interface ICreateUserResponse {
    id: string;
}
export interface IUserRepository {
    findUser: (data: IFindUserData) => Promise<any>;
    create: (data: ICreateUserData) => Promise<ICreateUserResponse>;
    update: (data: IUpdateUserData) => Promise<void>;
    delete: (data: IDeleteUserData) => Promise<void>;
    findMany: (data: IFindManyUserData) => Promise<any[]>;
    isUniqueEmail: (data: IIsUniqueEmail) => Promise<boolean>;
}
