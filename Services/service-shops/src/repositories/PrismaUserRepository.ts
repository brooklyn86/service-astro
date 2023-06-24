import { prisma } from "../prisma";
import {
    IIsUniqueEmail,
    IFindUserData,
    ICreateUserData,
    IDeleteUserData,
    IUpdateUserData,
    IUserRepository,
    IFindManyUserData
} from "./Interfaces/IUserRepository";

export class PrismaUserRepository implements IUserRepository {
    async findUser({ id, email, username }: IFindUserData) {
        const user = await prisma.user.findFirst({
            where: {
                OR: [{ email }, { username }, { id }],
            }
        });

        return user;
    }
    async create({
        firstName, lastName, email, username, password, accepted
    }: ICreateUserData) {
        const user = await prisma.user.create({
            data: {
                firstName, lastName, email, username, password, accepted
            },
        });

        return { id: user.id };
    }
    async update({
        id,
        firstName, lastName, email, username, password, accepted
    }: IUpdateUserData) {
        await prisma.user.update({
            where: {
                id,
            },
            data: {
                firstName, lastName, email, username, password, accepted
            },
        });
    }
    async findMany({ query }: IFindManyUserData): Promise<any[]> {
        const users = await prisma.user.findMany(query)
        //@ts-ignore
        return users;
    }
    async delete({ id }: IDeleteUserData) {
        await prisma.user.delete({
            where: {
                id,
            },
        });
    }
    async isUniqueEmail({ email }: IIsUniqueEmail) {
        const user = await prisma.user.findUnique({
            where: { email },
        });
        return !!user;
    }
}
