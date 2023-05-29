
export interface ICreateClientData {
    firstName: string;
    lastName: string;
    active: boolean;
    cnpj: string;
}

export interface ICreateClientProfileData {
    description: string;
    profile_url: string;
    cover_url: string;
}

export interface IClientProfileData {
    description: string;
    profile_url: string;
    cover_url: string;
}


export interface IFindClientData {
    id: string
}


export interface IFindManyClientData {
    query: any
}

export interface IFindClientResponse {
    id: string;
    title: string;
    active: boolean;
    profile: IClientProfileData
}

export interface IUpdateClientData {
    id: string;
    firstName: string;
    lastName: string;
    active: boolean;
    cnpj: string;
}
export interface IDeleteClientData {
    id: string;
}
export interface ICreateClientResponse {
    id: string;
}


export interface IFindClientUseCaseResponse {
    id: string
    firstName: string;
    lastName: string;
    cnpj: string;
    active: boolean;
    emails: IFindClientEmails[];
    address: IFindClientAddress[];
    phones: IFindClientPhones[];
    shops: IFindClientShops[];
}

interface IFindClientEmails {
    id: string;
    client_id: string;
    email: string;
    created_at: Date;
    updated_at: Date;
}

interface IFindClientAddress {
    id: string;
    client_id: string;
    city: string;
    country: string;
    number: number;
    place: string;
    cep: string;
    created_at: Date;
    updated_at: Date;
}

interface IFindClientPhones {
    id: string;
    client_id: string;
    ddd: string;
    number: string;
    created_at: Date;
    updated_at: Date;
}


interface IFindClientShops {
    id: string;
    client_id: string;
    title: string;
    active: boolean;
    profile : IFindClientShopProfileData[]
    created_at: Date;
    updated_at: Date;
}

interface IFindClientShopProfileData {
    id: string;
    shop_id: string;
    description: string;
    profile_url: string;
    cover_url: string;
    created_at: Date;
    updated_at: Date;
}


export interface IClientRepository {
    find: (data: IFindClientData) => Promise<IFindClientUseCaseResponse>;
    findMany: (data: IFindManyClientData) => Promise<IFindClientUseCaseResponse[]>;
    create: (data: ICreateClientData) => Promise<ICreateClientResponse>;
    update: (data: IUpdateClientData) => Promise<void>;
    delete: (data: IDeleteClientData) => Promise<void>;
}
