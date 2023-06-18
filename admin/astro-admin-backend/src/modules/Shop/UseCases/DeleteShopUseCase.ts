import { IShopRepository } from '../../../repositories/Interfaces/IShopRepository';

interface IDeleteUserUseCaseRequest {
    id: string;
}

export class DeleteShopUseCase {
    constructor(
        private shopRepository: IShopRepository,
    ) { }
    async execute(request: IDeleteUserUseCaseRequest): Promise<void> {
        const { id } = request;
        await this.shopRepository.delete({ id })
    }
}