
export interface ICreateShopData {
    title: string;
    client_id: string;
    category_id: string;
    active?: boolean;
    profile : ICreateShopProfileData
}

export interface ICreateShopProfileData {
    description: string;
    profile_url: string;
    cover_url: string;
}

export interface IShopProfileData {
    description: string;
    profile_url: string;
    cover_url: string;
}


export interface IFindShopData {
    id: string
}


export interface IFindManyShopData {
    query: any
}

export interface IFindShopResponse {
    id: string;
    title: string;
    client_id: string;
    category_id: string;
    active: boolean;
    profile: IShopProfileData
}

export interface IUpdateShopData {
    id: string;
    title: string;
    client_id: string;
    category_id: string;
    active: boolean;
    profile: IShopProfileData
}
export interface IDeleteShopData {
    id: string;
}
export interface ICreateShopResponse {
    id: string;
}

export interface IShopRepository {
    find: (data: IFindShopData) => Promise<IFindShopResponse>;
    findMany: (data: IFindManyShopData) => Promise<IFindShopResponse[]>;
    create: (data: ICreateShopData) => Promise<ICreateShopResponse>;
    update: (data: IUpdateShopData) => Promise<void>;
    delete: (data: IDeleteShopData) => Promise<void>;
}
