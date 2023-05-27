import { IShopRepository } from '../../../repositories/User/Interfaces/IShopRepository';

interface IUpdateShopUseCaseRequest {
    id: string;
    title: string;
    active: boolean;
    profile : {
        description: string;
        profile_url: string;
        cover_url: string;
    }
}

export class UpdateShopUseCase {
    constructor(
        private shopRepository: IShopRepository,
    ) { }
    async execute(request: IUpdateShopUseCaseRequest): Promise<void> {
        const { id, title, active, profile } = request;
        await this.shopRepository.update({ id, title, active, profile})
    }
}