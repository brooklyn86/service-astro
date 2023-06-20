import { IShopRepository } from '../../../repositories/Interfaces/IShopRepository';


interface IFindShopUseCaseRequest {
    id: string
}

interface IFindShopUseCaseResponse {
    id: string
    title: string;
    active: boolean;
    profile: {
        description: string;
        profile_url: string;
        cover_url: string;
    }
}

export class FindShopUseCase {
    constructor(
        private shopRepository: IShopRepository,
    ) { }
    async execute(request: IFindShopUseCaseRequest): Promise<IFindShopUseCaseResponse> {
        const { id } = request;
        return await this.shopRepository.find({ id })
    }
}