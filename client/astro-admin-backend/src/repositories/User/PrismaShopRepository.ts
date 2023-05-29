
import { prisma } from "../../prisma";
import { ICreateShopData, ICreateShopResponse, IFindShopData, IFindManyShopData, IFindShopResponse, IShopRepository, IUpdateShopData, IDeleteShopData } from "./Interfaces/IShopRepository";

export class PrismaShopRepository implements IShopRepository {
    async create({
        title, active, profile
    }: ICreateShopData): Promise<ICreateShopResponse> {
        const shop = await prisma.shop.create({
            data: {
                title: title,
                active: active,
                profile: {
                    create: {
                        cover_url: profile.cover_url,
                        description: profile.description,
                        profile_url: profile.profile_url
                    }
                }
            },
        });

        return { id: shop.id };
    }

    async find({ id }: IFindShopData): Promise<IFindShopResponse> {
        const shop = await prisma.shop.findFirst({
            where: {
                id
            },
            include: {
                profile: true
            }
        });
        //@ts-ignore
        return shop;
    }

    async findMany({ query }: IFindManyShopData): Promise<IFindShopResponse[]> {
        const shops = await prisma.shop.findMany(query)
        //@ts-ignore
        return shops;
    }

    async update({
        id, title, active, profile
    }: IUpdateShopData): Promise<void> {
        await prisma.shop.update({
            where: {
                id,
            },
            data: {
                title: title,
                active: active,
                profile: {
                    update: {
                        where: {
                            shop_id: id
                        },
                        data: {
                            ...profile
                        }
                    }
                }
            },
        });
    }
    async delete({ id }: IDeleteShopData): Promise<void> {
        await prisma.shop.delete({
            where: {
                id,
            }
        });
    }
}
