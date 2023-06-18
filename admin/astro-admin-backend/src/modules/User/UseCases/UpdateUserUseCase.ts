import { IUserRepository } from '../../../repositories/User/Interfaces/IUserRepository';

interface IUpdateUserUseCaseRequest {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    username: string
    accepted: boolean
}

export class UpdateUserUseCase {
    constructor(
        private userRepository: IUserRepository,
    ) { }
    async execute(request: IUpdateUserUseCaseRequest): Promise<void> {
        const { id, firstName, lastName, email, password, username,accepted } = request;
        await this.userRepository.update({ id, firstName, lastName, email, password, username,accepted })
    }
}