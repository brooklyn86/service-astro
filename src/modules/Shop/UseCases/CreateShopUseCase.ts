import { IShopRepository } from '../../../repositories/User/Interfaces/IShopRepository';

interface ICreateUserUseCaseRequest {
    title: string;
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
        const { title, active, profile } = request;
        return await this.shopRepository.create({ title, active, profile})
    }
}