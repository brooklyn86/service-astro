import { IIsUniqueUsername } from './../../../repositories/Interfaces/IUserRepository';
import { AppMessageError } from './../../../errors/AppMessageError';
import { IUserRepository } from "../../../repositories/Interfaces/IUserRepository";
import { IPasswordValidatorAdapter } from '../../../adapters/interfaces/IPasswordValidatorAdapter';
import { ICryptAdapter } from '../../../adapters/interfaces/ICryptAdapter';

interface IRegisterUserUseCaseRequest {
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    password: string;
    c_password: string;
    accepted: boolean;
}

export class RegisterUserUseCase {
    constructor(
        private userRepository: IUserRepository,
        private passwordAdapter: IPasswordValidatorAdapter,
        private cryptAdapter: ICryptAdapter
    ) { }
    async execute(request: IRegisterUserUseCaseRequest) {
        const { firstName, lastName, email, username, password, c_password, accepted } = request;
        const passwordIsValid = this.passwordAdapter.verifyStrongePassword({ password })
        if (passwordIsValid?.length > 0)
            throw new AppMessageError(passwordIsValid)

        const isUniqueEmail = await this.userRepository.findUser({ email })
        if (isUniqueEmail)
            throw new AppMessageError('Email already exists')

        const isUniqueUsername = await this.userRepository.findUser({ username })
        if (isUniqueUsername)
            throw new AppMessageError('Username already exists')

        const cryptPassword = this.cryptAdapter.hashPassword({ password });
        return await this.userRepository.create({ firstName, lastName, email, username, password: cryptPassword, accepted })
    }
}