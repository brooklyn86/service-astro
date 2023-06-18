import { IUserRepository } from '../../../repositories/User/Interfaces/IUserRepository';

interface ICreateUserUseCaseRequest {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    username: string
    accepted: boolean
}

interface ICreateUserUseCaseResponse {
    id: string
}

export class CreateUserUseCase {
    constructor(
        private userRepository: IUserRepository,
    ) { }
    async execute(request: ICreateUserUseCaseRequest) : Promise<ICreateUserUseCaseResponse> {
        const {  email, firstName, lastName, password, username, accepted } = request;
        return await this.userRepository.create({ email, firstName, lastName, password, username , accepted})
    }
}