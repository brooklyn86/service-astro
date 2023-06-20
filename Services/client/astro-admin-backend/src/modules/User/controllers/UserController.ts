
import {
    IUserController,
    ICreateUser
} from "../Interfaces/IUserController";
import { PrismaProductBaseRepository } from "../../../repositories/Products/PrismaProductBaseRepository";
import { AppMessageError } from "../../../errors/AppMessageError";

export class UserController implements IUserController {
    async create({ email,
        password,
        name,
        username }: ICreateUser) {
        const prismaProductsRepository = new PrismaProductBaseRepository();
        const aliexpressAdapter = new AliexpressAdapter();
        const createProductsUseCase = new CreateProductsUseCase(
            prismaProductsRepository,
            aliexpressAdapter
        );
        try {
            return await createProductsUseCase.execute({ product_id, video_url });
        } catch (error) {
            throw new AppMessageError(error.message, 500);
        }
    }

}
