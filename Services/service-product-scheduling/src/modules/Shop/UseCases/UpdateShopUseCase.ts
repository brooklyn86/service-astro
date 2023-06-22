import { IShopRepository } from '../../../repositories/Interfaces/IShopRepository';

interface IUpdateShopUseCaseRequest {
    id: string;
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

export class UpdateShopUseCase {
    constructor(
        private shopRepository: IShopRepository,
    ) { }
    async execute(request: IUpdateShopUseCaseRequest): Promise<void> {
        const { id, title,client_id, category_id, active, profile } = request;
        await this.shopRepository.update({ id, title, client_id, category_id, active, profile})
    }
}