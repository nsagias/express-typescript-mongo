import mongoose, { Types,  Schema } from "mongoose";

export interface IUserSchema {
  user?: Types.ObjectId;
  name?: string;
  email?: string;
  isAdmin?: boolean;
}

export interface IUserSchemaSeederItem extends IUserSchema {
  _id: mongoose.Types.ObjectId;
}

export interface IUserSchemaSeederList {
  [index: number]: IUserSchemaSeederItem ;
}


export interface IUserSchemaPassword extends IUserSchema {
  _id: mongoose.Types.ObjectId;
  password: string;
}
