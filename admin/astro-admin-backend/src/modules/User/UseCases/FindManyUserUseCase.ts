import { IUserRepository } from '../../../repositories/Interfaces/IUserRepository';

interface IFindUserUseCaseRequest {
    id?: string;
    firstName?: string;
    lastName?: string;
    active?: boolean;
}

interface IFindManyUserUseCaseRequest {
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

export class FindManyUserUseCase {
    constructor(
        private userRepository: IUserRepository,
    ) { }
    async execute(request: IFindUserUseCaseRequest): Promise<any[]> {
        const { id, firstName, lastName, active } = request;
        const queryLikers: any[] = [];
        if (id) {
            queryLikers.push({
                id: {
                    contains: id
                }
            })
        }
        if (firstName) {
            queryLikers.push({
                title: {
                    contains: firstName
                }
            })
        }
        if (lastName) {
            queryLikers.push({
                title: {
                    contains: lastName
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
                profile: true
            }
        }
        return await this.userRepository.findMany({ query })
    }
}