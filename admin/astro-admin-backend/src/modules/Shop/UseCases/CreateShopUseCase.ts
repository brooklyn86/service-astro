import { IShopRepository } from '../../../repositories/User/Interfaces/IShopRepository';

interface ICreateUserUseCaseRequest {
    title: string;
    client_id: string;
    category_id: string;
    active: boolean;
    profile : {
        description: string;
        profile_url: string;
        cover_url: string;
    }
}

interface ICreateUserUseCaseResponse {
    id: string
}

export class CreateShopUseCase {
    constructor(
        private shopRepository: IShopRepository,
    ) { }
    async execute(request: ICreateUserUseCaseRequest) : Promise<ICreateUserUseCaseResponse> {
        const { title,client_id, category_id, active, profile } = request;
        return await this.shopRepository.create({ title, client_id, category_id, active, profile})
    }
}