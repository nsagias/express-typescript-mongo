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



interface IUserSchema {
  user?: Types.ObjectId;
  name?: string;
  email?: string;
  isAdmin?: boolean;
  
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


