import { IUserRepository } from '../../../repositories/Interfaces/IUserRepository';

interface IDeleteUserUseCaseRequest {
    id: string;
}

export class DeleteUserUseCase {
    constructor(
        private userRepository: IUserRepository,
    ) { }
    async execute(request: IDeleteUserUseCaseRequest): Promise<void> {
        const { id } = request;
        await this.userRepository.delete({ id })
    }
}