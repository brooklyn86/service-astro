
import { prisma } from "../../prisma";
import { ICreateClientData, ICreateClientResponse, IFindClientData, IFindManyClientData, IFindClientResponse, IClientRepository, IUpdateClientData, IDeleteClientData, IFindClientUseCaseResponse } from "./Interfaces/IClientRepository";

export class PrismaClientRepository implements IClientRepository {
    async create({
        firstName,
        lastName,
        cnpj,
        active
    }: ICreateClientData): Promise<ICreateClientResponse> {
        const client = await prisma.client.create({
            data: {
                firstName,
                lastName,
                cnpj,
                active
            },
        });

        return { id: client.id };
    }

    async find({ id }: IFindClientData): Promise<IFindClientUseCaseResponse> {
        const client = await prisma.client.findFirst({
            where: {
                id
            },
            include: {
                address: true,
                emails: true,
                phones: true,
                shops: {
                    include:{
                        profile:true
                    }
                }
            }
        });
        return client;
    }

    async findMany({ query }: IFindManyClientData): Promise<IFindClientUseCaseResponse[]> {
        const clients = await prisma.client.findMany(query)
        //@ts-ignore
        return clients;
    }

    async update({
        id,
        firstName,
        lastName,
        cnpj,
        active
    }: IUpdateClientData): Promise<void> {
        await prisma.client.update({
            where: {
                id,
            },
            data: {
                firstName,
                lastName,
                cnpj,
                active
            },
        });
    }
    async delete({ id }: IDeleteClientData): Promise<void> {
        await prisma.client.delete({
            where: {
                id,
            }
        });
    }
}
