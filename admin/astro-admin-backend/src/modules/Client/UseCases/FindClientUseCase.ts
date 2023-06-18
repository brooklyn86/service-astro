import { IClientRepository } from '../../../repositories/Interfaces/IClientRepository';


interface IFindClientUseCaseRequest {
    id: string
}

interface IFindClientUseCaseResponse {
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


export class FindClientUseCase {
    constructor(
        private clientRepository: IClientRepository,
    ) { }
    async execute(request: IFindClientUseCaseRequest): Promise<IFindClientUseCaseResponse> {
        const { id } = request;
        return await this.clientRepository.find({ id })
    }
}