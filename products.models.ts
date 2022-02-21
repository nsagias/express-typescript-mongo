export interface IProductBase {
  name: string;
  description: string;
  brand: string;
  category: string;
  price: number;
  countInStock: any;
  rating: number;
  numReviews: number;
}

export interface IProduct extends IProductBase{
  _id: string;
}

export interface IProduct2 extends IProduct {
  image: string;
}

export interface IError {
  message: string;
}

export type Product = IProduct | undefined | IError;
export type Products = IProduct[] | undefined | IError;