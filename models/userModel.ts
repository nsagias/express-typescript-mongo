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

export interface IUserSchemaSeeder extends IUserSchema {
  _id: mongoose.Types.ObjectId;
}


export interface IUserSchemaPassword extends IUserSchema {
  _id: mongoose.Types.ObjectId;
  password: string;
}

const userSchema: Schema = new mongoose.Schema<IUserSchema>({
  name: { type: String, required: true },
  email: { type: String, required: true , unique: true},
  isAdmin: { type: Boolean, required: true, default: false },
  
}, {
  timestamps: true
});

const User = mongoose.model<IUserSchema>('User', userSchema);
export default User;


