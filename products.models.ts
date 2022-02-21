import { IUserSchemaSeederItem } from "./user.models";

export interface IProductBase {
  name: string;
  image: string;
  description: string;
  brand: string;
  category: string;
  price: number;
  countInStock: any;
  rating: number;
  numReviews: number;
}

export interface IProductBaseSeeder extends IProductBase {
  user: IUserSchemaSeederItem;
}

export interface IProduct extends IProductBase{
  _id: string;
}

export interface IError {
  message: string;
}

export type Product = IProduct | undefined | IError;
export type Products = IProduct[] | undefined | IError;