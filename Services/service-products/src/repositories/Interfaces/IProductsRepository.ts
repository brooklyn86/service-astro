export interface ICreateProductsData {
  name: string;
  productTypeId: string;
  active?: boolean;
  expireDate: Date;
  productImageId: string;
}

export interface ICreateProductsResponse {
  id: string;
}

export interface IFindProductsData {
  id: string | undefined;
}

export interface IFindProductsResponse {
  id: string;
  name: string;
  productTypeId: string;
  active: boolean;
  expireDate: Date;
  productImageId: string;
}

export interface IUpdateProductsData {
  id: string;
  name: string;
  productTypeId: string;
  active: boolean;
  expireDate: Date;
  productImageId: string;
}

export interface IDeleteProductsData {
  id: string;
}

export interface IProductsRepository {
  create: (data: ICreateProductsData) => Promise<ICreateProductsResponse>;
  find: (data: IFindProductsData) => Promise<IFindProductsResponse | null>;
  update: (data: IUpdateProductsData) => Promise<void>;
  delete: (data: IDeleteProductsData) => Promise<void>;
}
