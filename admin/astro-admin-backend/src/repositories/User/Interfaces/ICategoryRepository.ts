export interface ICreateCategoryData {
  id: string;
  title: string;
  active: boolean;
}

export interface ICreateCategoryResponse {
  id: string;
}

export interface IGetCategoryData {
  id: string;
}

export interface IGetCategoryResponse {
  id: string;
  title: string;
  active: boolean;
  shops: IShop[];
}

export interface IShop {
  id: string;
  title: string;
  client_id: string;
  category_id: string;
  active: boolean;
}

export interface IGetAllCategoryData {
  query: any;
}

export interface IGetAllCategoryResponse {
  id: string;
  title: string;
  active: boolean;
  shops: IShop[];
}

export interface IUpdateCategoryData {
  id: string;
  title: string;
  active: boolean;
}

export interface IDeleteCategoryData {
  id: string;
}

export interface ICategoryRepository {
  create: (data: ICreateCategoryData) => Promise<ICreateCategoryResponse>;
  find: (data: IGetCategoryData) => Promise<IGetCategoryResponse>;
  findMany: (data: IGetAllCategoryData) => Promise<IGetAllCategoryResponse[]>;
  update: (data: IUpdateCategoryData) => Promise<void>;
  delete: (data: IDeleteCategoryData) => Promise<void>;
}
