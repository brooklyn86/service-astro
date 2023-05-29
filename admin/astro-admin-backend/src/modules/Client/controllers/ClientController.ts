
import { AppMessageError } from "../../../errors/AppMessageError";
import { PrismaClientRepository } from "../../../repositories/User/PrismaClientRepository";
import { CreateClientUseCase } from "../UseCases/CreateClientUseCase";
import {
    ICreateClient,
    ICreateClientResponse,
    IDeleteClient,
    IFindManyClient,
    IFindClient,
    IFindClientResponse,
    IClientController,
    IUpdateClient
} from "../Interfaces/IClientController";
import { DeleteClientUseCase } from "../UseCases/DeleteClientUseCase";
import { UpdateClientUseCase } from "../UseCases/UpdateClientUseCase";
import { FindManyClientUseCase } from "../UseCases/FindManyClientUseCase";
import { FindClientUseCase } from "../UseCases/FindClientUseCase";

export class ClientController implements IClientController {
    async find({ id }: IFindClient): Promise<IFindClientResponse> {
        const prismaClientRepository = new PrismaClientRepository();
        const findClientUseCase = new FindClientUseCase(
            prismaClientRepository,
        );
        try {
            return await findClientUseCase.execute({ id });
        } catch (error) {
            throw new AppMessageError(error.message, 500);
        }
    };

    async findMany({ id, firstName, lastName, cnpj, active }: IFindManyClient): Promise<IFindClientResponse[]> {
        const prismaClientRepository = new PrismaClientRepository();
        const findManyClientUseCase = new FindManyClientUseCase(
            prismaClientRepository,
        );
        try {
            return await findManyClientUseCase.execute({id, firstName, lastName, cnpj, active });
        } catch (error) {
            throw new AppMessageError(error.message, 500);
        }
    };
    async create({ firstName, lastName, cnpj, active }: ICreateClient): Promise<ICreateClientResponse> {
        const prismaClientRepository = new PrismaClientRepository();
        const createClientUseCase = new CreateClientUseCase(
            prismaClientRepository,
        );
        try {
            return await createClientUseCase.execute({ firstName, lastName, cnpj, active });
        } catch (error) {
            throw new AppMessageError(error.message, 500);
        }
    };
    async update({ id, firstName, lastName, cnpj, active }: IUpdateClient): Promise<void> {
        const prismaClientRepository = new PrismaClientRepository();
        const updateClientUseCase = new UpdateClientUseCase(
            prismaClientRepository,
        );
        try {
            await updateClientUseCase.execute({ id, firstName, lastName, cnpj, active});
        } catch (error) {
            throw new AppMessageError(error.message, 500);
        }
    };

    async delete({ id }: IDeleteClient): Promise<void> {
        const prismaClientRepository = new PrismaClientRepository();
        const deleteClientUseCase = new DeleteClientUseCase(
            prismaClientRepository,
        );
        try {
            await deleteClientUseCase.execute({ id });
        } catch (error) {
            throw new AppMessageError(error.message, 500);
        }
    };
}
