import { AppMessageError } from "./../../../errors/AppMessageError";

import {
  ICategoryController,
  ICreateCategory,
  ICreateCategoryResponse,
  IDeleteCategory,
  IGetAllCategory,
  IGetAllCategoryResponse,
  IGetCategory,
  IGetCategoryResponse,
  IUpdateCategory,
} from "../Interfaces/ICategoryController";
import { PrismaCategoryRepository } from "../../../repositories/User/PrismaCategoryRepository";
import { CreateCategoryUseCase } from "../UseCases/CreateCategoryUseCase";
import { FindCategoryUseCase } from "../UseCases/FindCategoryUseCase";
import { FindManyCategoryUseCase } from "../UseCases/FindManyCategoryUseCase";
import { UpdateManyCategoryUseCase } from "../UseCases/UpdateCategoryUseCase";
import { DeleteCategoryUseCase } from "../UseCases/DeleteCategoryUseCase";

export class CategoryController implements ICategoryController {
    
  
    async create({id, title, active}: ICreateCategory): Promise<ICreateCategoryResponse>{
        const prismaCategoryRepository = new PrismaCategoryRepository();
        const createCategoryUseCase = new CreateCategoryUseCase(
            prismaCategoryRepository,
        ); 
          
        try {
            return await createCategoryUseCase.execute({id, title, active});
        } catch (error) {
            throw new AppMessageError(error.message, 500);
        }
        
    }

    async find({id}: IGetCategory): Promise<IGetCategoryResponse> {
        const prismaCategoryRepository = new PrismaCategoryRepository();
        const findCategoryUseCase = new FindCategoryUseCase(
            prismaCategoryRepository
        );
        
        try {
            return await findCategoryUseCase.execute({id})
        } catch (error) {
            throw new AppMessageError(error.message, 500);
        }
    }

    async findMany({id, title, active}: IGetAllCategory): Promise<IGetAllCategoryResponse[]> {
        const prismaCategoryRepository = new PrismaCategoryRepository();
        const findManyCategoryUseCase = new FindManyCategoryUseCase(
            prismaCategoryRepository
        );

        try {
            return await findManyCategoryUseCase.execute({id, title, active})
        } catch (error) {
            throw new AppMessageError(error.message, 500);
        }
    }

    async update({id, title, active}: IUpdateCategory): Promise<void> {
       const prismaCategoryRepository = new PrismaCategoryRepository();
       const updateManyCategoryUseCase = new UpdateManyCategoryUseCase(
            prismaCategoryRepository
       );
       
       try {
            await updateManyCategoryUseCase.execute({id, title, active})
       } catch (error) {
            throw new AppMessageError(error.message, 500);
       }

    }

    async delete({id}: IDeleteCategory): Promise<void> {
        const prismaCategoryRepository = new PrismaCategoryRepository();
        const deleteCategoryUseCase = new DeleteCategoryUseCase(
            prismaCategoryRepository
        );
 
        try {
            await deleteCategoryUseCase.execute({id});
        } catch (error) {
            throw new AppMessageError(error.message, 500);
        }

    }

}
