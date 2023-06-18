import { IUserRepository } from '../../../repositories/User/Interfaces/IUserRepository';


interface IFindUserUseCaseRequest {
    id: string
}

interface IFindUserUseCaseResponse {
    id: string
    title: string;
    active: boolean;
    client_id: string;
    category_id: string;
    profile: {
        description: string;
        profile_url: string;
        cover_url: string;
    }
}

export class FindUserUseCase {
    constructor(
        private userRepository: IUserRepository,
    ) { }
    async execute(request: IFindUserUseCaseRequest): Promise<any> {
        const { id } = request;
        return await this.userRepository.findUser({ id })
    }
}