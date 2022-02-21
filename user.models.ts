import mongoose, { 
  // Document, 
  // Model, 
  // model, 
  Types, 
  Schema, 
  // Query, 
  // ConnectOptions, 
  // mongo,
  // SchemaOptions,
  // SchemaTypeOptions,
  // SchemaDefinitionProperty
} from "mongoose";

export interface IUserSchema {
  user?: Types.ObjectId;
  name?: string;
  email?: string;
  isAdmin?: boolean;
}

export interface IUserSchemaSeederItem extends IUserSchema {
  _id: mongoose.Types.ObjectId;
}


export interface IUserSchemaPassword extends IUserSchema {
  _id: mongoose.Types.ObjectId;
  password: string;
}
