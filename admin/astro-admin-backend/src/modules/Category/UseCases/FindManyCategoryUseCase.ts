import { ICategoryRepository, IShop } from "../../../repositories/User/Interfaces/ICategoryRepository"

export interface IFindManyCategoryUseCaseRequest {
    id: string;
    title: string;
    active: boolean;
}

export interface IFindManyCategoryUseCaseResponse {
    id: string;
    title: string;
    active: boolean;
    shops: IShop[];
}

export class FindManyCategoryUseCase {
    constructor(
        private categoryRepository: ICategoryRepository
    ){}

    async execute(request: IFindManyCategoryUseCaseRequest): Promise<IFindManyCategoryUseCaseResponse[]> {
        const {id, title, active} = request;
        const queryLikers = [];

        if (id) {
            queryLikers.push({
                id: {
                    contains: id
                }
            });
        }

        if (title) {
            queryLikers.push({
                title: {
                    contains: title
                }
            });
        }

        if (active) {
            queryLikers.push({
                active: {
                    contains: active
                }
            });
        }

        const query = {
            where: {
                AND: queryLikers
            },
            include: {
                shops: true
            }
        }

        return await this.categoryRepository.findMany({ query });
    }
}

