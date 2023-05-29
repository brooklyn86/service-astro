import { IClientRepository } from '../../../repositories/User/Interfaces/IClientRepository';

interface IDeleteClientUseCaseRequest {
    id: string;
}

export class DeleteClientUseCase {
    constructor(
        private clientRepository: IClientRepository,
    ) { }
    async execute(request: IDeleteClientUseCaseRequest): Promise<void> {
        const { id } = request;
        await this.clientRepository.delete({ id })
    }
}