import { prisma } from "../prisma";
import {
  ICategoryRepository,
  ICreateCategoryData,
  ICreateCategoryResponse,
  IDeleteCategoryData,
  IGetAllCategoryData,
  IGetAllCategoryResponse,
  IGetCategoryData,
  IGetCategoryResponse,
  IUpdateCategoryData,
} from "./Interfaces/ICategoryRepository";

export class PrismaCategoryRepository implements ICategoryRepository {
  async create({
    title,
    active,
  }: ICreateCategoryData): Promise<ICreateCategoryResponse> {
    const category = await prisma.category.create({
      data: {
        title: title,
        active: active,
      },
    });
    return { id: category.id };
  }

  async find({ id }: IGetCategoryData): Promise<IGetCategoryResponse | null> {
    const category = await prisma.category.findFirst({
      where: {
        id,
      },
      include: {
        shops: true
      }
    });
    return category;
  }

  async findMany({
    query
  }: IGetAllCategoryData): Promise<IGetAllCategoryResponse[]> {
    const category = await prisma.category.findMany(query);
    //@ts-ignore
    return category;
  }

  async update({ id, title, active }: IUpdateCategoryData): Promise<void> {
    await prisma.category.update({
      where: {
        id,
      },
      data: {
        title: title,
        active: active,
      },
    });
  }

  async delete({ id }: IDeleteCategoryData): Promise<void> {
    await prisma.category.delete({
      where: {
        id,
      },
    });
  }
}
