import { IShopRepository } from '../../../repositories/User/Interfaces/IShopRepository';

interface IFindShopUseCaseRequest {
    id: string;
    title: string;
    active: boolean;
}

interface IFindManyShopUseCaseRequest {
    id: string;
    title: string;
    active: boolean;
    profile: {
        description: string;
        profile_url: string;
        cover_url: string;
    }
}

export class FindManyShopUseCase {
    constructor(
        private shopRepository: IShopRepository,
    ) { }
    async execute(request: IFindShopUseCaseRequest): Promise<IFindManyShopUseCaseRequest[]> {
        const { id, title, active } = request;
        const query = {}
        return await this.shopRepository.findMany({ query })
    }
}