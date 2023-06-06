import { ICategoryRepository } from "../../../repositories/User/Interfaces/ICategoryRepository";

export interface IUpdateCategoryUseCaseRequest {
    id: string;
    title: string;
    active: boolean;
}

export interface IUpdateCategoryUseCaseResponse {
    id: string;
    title: string;
    active: boolean;
}

export class UpdateManyCategoryUseCase {
    constructor(
        private categoryRepository: ICategoryRepository
    ){}

    async execute(request: IUpdateCategoryUseCaseRequest): Promise<void> {
        const {id, title, active} = request;
        await this.categoryRepository.update({id, title, active}) 
    }
}