
import { AppMessageError } from "../../../errors/AppMessageError";
import { PrismaShopRepository } from "../../../repositories/User/PrismaShopRepository";
import { CreateShopUseCase } from "../UseCases/CreateShopUseCase";
import {
    ICreateShop,
    ICreateShopResponse,
    IDeleteShop,
    IFindManyShop,
    IFindShop,
    IFindShopResponse,
    IShopController,
    IUpdateShop
} from "../Interfaces/IShopController";
import { DeleteShopUseCase } from "../UseCases/DeleteShopUseCase";
import { UpdateShopUseCase } from "../UseCases/UpdateShopUseCase";
import { FindManyShopUseCase } from "../UseCases/FindManyShopUseCase";
import { FindShopUseCase } from "../UseCases/FindShopUseCase";

export class ShopController implements IShopController {
    async find({ id }: IFindShop): Promise<IFindShopResponse> {
        const prismaShopRepository = new PrismaShopRepository();
        const findShopUseCase = new FindShopUseCase(
            prismaShopRepository,
        );
        try {
            return await findShopUseCase.execute({ id });
        } catch (error) {
            throw new AppMessageError(error.message, 500);
        }
    };

    async findMany({ id, title, category_id, client_id, active }: IFindManyShop): Promise<IFindShopResponse[]> {
        const prismaShopRepository = new PrismaShopRepository();
        const findManyShopUseCase = new FindManyShopUseCase(
            prismaShopRepository,
        );
        try {
            return await findManyShopUseCase.execute({ id, title, category_id, client_id, active });
        } catch (error) {
            throw new AppMessageError(error.message, 500);
        }
    };
    async create({ title, active, profile }: ICreateShop): Promise<ICreateShopResponse> {
        const prismaShopRepository = new PrismaShopRepository();
        const createShopUseCase = new CreateShopUseCase(
            prismaShopRepository,
        );
        try {
            return await createShopUseCase.execute({ title, active, profile });
        } catch (error) {
            throw new AppMessageError(error.message, 500);
        }
    };
    async update({ id, title, active, profile }: IUpdateShop): Promise<void> {
        const prismaShopRepository = new PrismaShopRepository();
        const updateShopUseCase = new UpdateShopUseCase(
            prismaShopRepository,
        );
        try {
            await updateShopUseCase.execute({ id, title, active, profile });
        } catch (error) {
            throw new AppMessageError(error.message, 500);
        }
    };

    async delete({ id }: IDeleteShop): Promise<void> {
        const prismaShopRepository = new PrismaShopRepository();
        const deleteShopUseCase = new DeleteShopUseCase(
            prismaShopRepository,
        );
        try {
            await deleteShopUseCase.execute({ id });
        } catch (error) {
            throw new AppMessageError(error.message, 500);
        }
    };
}
