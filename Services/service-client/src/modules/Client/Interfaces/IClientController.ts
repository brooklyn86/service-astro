export interface ICreateClient {
    firstName: string;
    lastName: string;
    active: boolean;
    cnpj: string;
}

export interface IFindClientResponse {
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
    description: string;
    profile_url: string;
    cover_url: string;
}
export interface ICreateClientResponse {
    id: string;
}
export interface ICreateClientProfile {
    description: string;
    profile_url: string;
    cover_url: string;
}

export interface IUpdateClient {
    id: string;
    firstName: string;
    lastName: string;
    active: boolean;
    cnpj: string;
}

export interface IDeleteClient {
    id: string;
}


export interface ICreateClientProfile {
    description: string;
    profile_url: string;
    cover_url: string;
}

export interface IFindClient{
    id: string;
}

export interface IFindManyClient{
    id?: string;
    firstName?: string;
    lastName?: string;
    cnpj?: string;
    active?: boolean;
}

export interface IClientController {
    find: (data: IFindClient) => Promise<IFindClientResponse>;
    findMany: (data: IFindManyClient) => Promise<IFindClientResponse[]>;
    create: (data: ICreateClient) => Promise<ICreateClientResponse>;
    update: (data: IUpdateClient) => Promise<void>;
    delete: (data: IDeleteClient) => Promise<void>;
}
