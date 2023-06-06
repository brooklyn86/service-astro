import { ICategoryRepository } from "../../../repositories/User/Interfaces/ICategoryRepository"

export interface IFindCategoryUseCaseRequest {
    id: string
}

export interface IFindCategoryUseCaseResponse {
    id: string
}

export class FindCategoryUseCase {
    constructor(
        private categoryRepository: ICategoryRepository
    ) {}

    async execute(request: IFindCategoryUseCaseRequest): Promise<IFindCategoryUseCaseResponse> {
        const {id} = request;
        return await this.categoryRepository.find({id});
    }
}