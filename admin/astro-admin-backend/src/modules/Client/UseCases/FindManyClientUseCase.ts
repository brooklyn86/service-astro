import { IClientRepository } from '../../../repositories/User/Interfaces/IClientRepository';

interface IFindClientUseCaseRequest {
    id: string;
    firstName: string;
    lastName: string;
    cnpj: string;
    active: boolean;
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
    profile: IFindClientShopProfileData[]
    created_at: Date;
    updated_at: Date;
}

interface IFindClientShopProfileData {
    id: string;
    description: string;
    profile_url: string;
    cover_url: string;
}


export class FindManyClientUseCase {
    constructor(
        private clientRepository: IClientRepository,
    ) { }
    async execute(request: IFindClientUseCaseRequest): Promise<IFindClientUseCaseResponse[]> {
        const { id, firstName, lastName, cnpj, active } = request;
        const queryLikers = []
        if (id) {
            queryLikers.push({
                id: {
                    contains: id
                }
            })
        }
        if (firstName) {
            queryLikers.push({
                title: {
                    contains: firstName
                }
            })
        }
        if (lastName) {
            queryLikers.push({
                title: {
                    contains: lastName
                }
            })
        }
        if (cnpj) {
            queryLikers.push({
                title: {
                    contains: cnpj
                }
            })
        }
        if (active) {
            queryLikers.push({
                active: active
            })
        }

        const query = {
            where: {
                AND: queryLikers
            },
            include: {
                address: true,
                emails: true,
                phones: true,
                shops: true
            }
        }
        return await this.clientRepository.findMany({ query })
    }
}