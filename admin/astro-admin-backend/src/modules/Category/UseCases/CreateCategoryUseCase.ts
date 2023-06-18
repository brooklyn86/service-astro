import { ICategoryRepository } from "../../../repositories/Interfaces/ICategoryRepository"

export interface ICreateCategoryUseCaseRequest {
    title: string,
    active: boolean
}

export interface ICreateCategoryUseCaseResponse {
    id: string,
}

export class CreateCategoryUseCase {
    constructor(
        private categoryRepository: ICategoryRepository
    ){}

    async execute(request: ICreateCategoryUseCaseRequest): Promise<ICreateCategoryUseCaseResponse> {
        const { title, active } = request;
        return await this.categoryRepository.create({ title, active});
    }
}