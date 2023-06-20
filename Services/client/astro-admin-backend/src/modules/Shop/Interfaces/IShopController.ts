export interface ICreateShop {
    title: string;
    active?: boolean;
    profile : ICreateShopProfile
}

export interface IFindShopResponse {
    id: string;
    title: string;
    active?: boolean;
    profile : ICreateShopProfile
}
export interface ICreateShopResponse {
    id: string;
}
export interface ICreateShopProfile {
    description: string;
    profile_url: string;
    cover_url: string;
}

export interface IUpdateShop {
    id: string;
    title: string;
    active?: boolean;
    profile : ICreateShopProfile
}

export interface IDeleteShop {
    id: string;
}


export interface ICreateShopProfile {
    description: string;
    profile_url: string;
    cover_url: string;
}

export interface IFindShop{
    id: string;
}

export interface IFindManyShop{
    id?: string;
    title?: string;
    active?: boolean;
}

export interface IShopController {
    find: (data: IFindShop) => Promise<IFindShopResponse>;
    findMany: (data: IFindManyShop) => Promise<IFindShopResponse[]>;
    create: (data: ICreateShop) => Promise<ICreateShopResponse>;
    update: (data: IUpdateShop) => Promise<void>;
    delete: (data: IDeleteShop) => Promise<void>;
}
