import { IShopRepository } from '../../../repositories/Interfaces/IShopRepository';

interface IFindShopUseCaseRequest {
    id?: string;
    title?: string;
    client_id?: string;
    category_id?: string;
    active?: boolean;
}

interface IFindManyShopUseCaseRequest {
    id: string;
    title: string;
    client_id: string;
    category_id: string;
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
        const queryLikers: any[] = [];
        if (id) {
            queryLikers.push({
                id: {
                    contains: id
                }
            })
        }
        if (title) {
            queryLikers.push({
                title: {
                    contains: title
                }
            })
        }
        if (active) {
            queryLikers.push({
                active: active
            })
        }

        const query = {
            where: {
                AND: queryLikers
            },
            include: {
                profile:true
            }
        }
        return await this.shopRepository.findMany({ query })
    }
}