import { PrismaUserRepository } from './../../../repositories/PrismaUserRepository';

import {
    IUserController,
    ICreateUser
} from "../Interfaces/IUserController";
import { AppMessageError } from "../../../errors/AppMessageError";
import { CreateUserUseCase } from "../UseCases/CreateUserUseCase";

export class UserController implements IUserController {
    async create({ firstName, lastName, email, username, password, accepted }: ICreateUser) {
        
        const prismaUserRepository = new PrismaUserRepository()
        const createProductsUseCase = new CreateUserUseCase(
            prismaUserRepository,
        );
        try {
            return await createProductsUseCase.execute({ firstName, lastName, email, username, password, accepted});
        } catch (error) {
            throw new AppMessageError(error.message, 500);
        }
    }

}
