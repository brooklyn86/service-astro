import { IShop } from "../../../repositories/User/Interfaces/ICategoryRepository"

export interface ICreateCategory {
    id: string;
    title: string;
    active: boolean;
}

export interface ICreateCategoryResponse {
    id: string
}

export interface IGetCategory {
    id: string;
}

export interface IGetCategoryResponse {
    id: string;
}

export interface IGetAllCategory {
    id?: string;
    title?: string;
    active?: boolean;
}

export interface IGetAllCategoryResponse {
    id: string;
    title: string;
    active: boolean;
    shops: IShop[];
}

export interface IUpdateCategory {
    id: string;
    title: string;
    active: boolean;
}

export interface IDeleteCategory {
    id: string
}

export interface ICategoryController {
    create: (data: ICreateCategory) => Promise<ICreateCategoryResponse>;
    find: (data: IGetCategory) => Promise<IGetCategoryResponse>;
    findMany: (data: IGetAllCategory) => Promise<IGetAllCategoryResponse[]>;
    update: (data: IUpdateCategory) => Promise<void>;
    delete: (data: IDeleteCategory) => Promise<void>;
}