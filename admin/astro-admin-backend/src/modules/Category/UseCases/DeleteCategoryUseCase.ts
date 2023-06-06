import { ICategoryRepository } from "../../../repositories/User/Interfaces/ICategoryRepository";

export interface IDeleteCategoryUseCaseRequest {
    id: string;
}

export interface IDeleteCategoryUseCaseResponse {
    id: string;
}

export class DeleteCategoryUseCase {
    constructor(
        private categoryRepository: ICategoryRepository
    ){}

    async execute(request: IDeleteCategoryUseCaseRequest): Promise<void> {
        const {id} = request;
        await this.categoryRepository.delete({id})
    }
}