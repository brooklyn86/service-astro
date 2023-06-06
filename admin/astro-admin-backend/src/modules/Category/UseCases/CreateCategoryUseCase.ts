import { ICategoryRepository } from "../../../repositories/User/Interfaces/ICategoryRepository"

export interface ICreateCategoryUseCaseRequest {
    id: string,
    title: string,
    active: boolean
}

export interface ICreateCategoryUseCaseResponse {
    id: string,
    title: string,
    active: boolean
}

export class CreateCategoryUseCase {
    constructor(
        private  categoryRepository: ICategoryRepository
    ){}

    async execute(request: ICreateCategoryUseCaseRequest): Promise<ICreateCategoryUseCaseResponse> {
        const { id, title, active } = request;
        return await this.categoryRepository.create({id, title, active});
    }
}