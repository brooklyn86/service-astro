import { prisma } from "../prisma";

import {
  ICreateProductsData,
  ICreateProductsResponse,
  IDeleteProductsData,
  IFindProductsData,
  IFindProductsResponse,
  IProductsRepository,
  IUpdateProductsData,
} from "./Interfaces/IProductsRepository";

export class PrismaProductsRepository implements IProductsRepository {
  async create({
    name,
    productTypeId,
    active,
    expireDate,
    productImageId,
  }: ICreateProductsData): Promise<ICreateProductsResponse> {
    const products = await prisma.products.create({
      data: {
        name: name,
        productTypeId: productTypeId,
        active: active,
        expireDate: expireDate,
        productImageId: productImageId,
      },
    });
    return {
      id: products.id,
    };
  }

  async find({ id }: IFindProductsData): Promise<IFindProductsResponse | null> {
    const products = await prisma.products.findFirst({
      where: {
        id,
      },
    });

    return products;
  }

  async update({
    id,
    name,
    productTypeId,
    active,
    expireDate,
    productImageId,
  }: IUpdateProductsData): Promise<void> {
    const products = await prisma.products.update({
      where: {
        id,
      },
      data: {
        name: name,
        productTypeId: productTypeId,
        active: active,
        expireDate: expireDate,
        productImageId: productImageId,
      },
    });
  }

  async delete({ id }: IDeleteProductsData): Promise<void> {
    const products = await prisma.products.delete({
      where: {
        id,
      },
    });
  }
}
