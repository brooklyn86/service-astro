import { IClientRepository } from '../../../repositories/User/Interfaces/IClientRepository';

interface IUpdateClientUseCaseRequest {
    id: string;
    firstName: string;
    lastName: string;
    cnpj: string;
    active: boolean;
}

export class UpdateClientUseCase {
    constructor(
        private clientRepository: IClientRepository,
    ) { }
    async execute(request: IUpdateClientUseCaseRequest): Promise<void> {
        const {
            id,
            firstName,
            lastName,
            cnpj,
            active
        } = request;
        await this.clientRepository.update({
            id, 
            firstName,
            lastName,
            cnpj,
            active
        })
    }
}