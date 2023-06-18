import { IClientRepository } from '../../../repositories/Interfaces/IClientRepository';

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