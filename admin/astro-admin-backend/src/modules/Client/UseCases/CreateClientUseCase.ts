import { IClientRepository } from "../../../repositories/Interfaces/IClientRepository";


interface ICreateClientUseCaseRequest {
    firstName: string;
    lastName: string;
    active: boolean;
    cnpj: string;
}

interface ICreateClientUseCaseResponse {
    id: string
}

export class CreateClientUseCase {
    constructor(
        private clientRepository: IClientRepository,
    ) { }
    async execute(request: ICreateClientUseCaseRequest): Promise<ICreateClientUseCaseResponse> {
        const { firstName,
            lastName,
            active,
            cnpj } = request;
        return await this.clientRepository.create({
            firstName,
            lastName,
            active,
            cnpj
        })
    }
}