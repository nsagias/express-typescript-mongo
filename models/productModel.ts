import mongoose, { 
  Document, 
  Model, 
  model, 
  Types, 
  Schema, 
  Query, 
  ConnectOptions, 
  mongo,
  SchemaOptions,
  SchemaTypeOptions,
  SchemaDefinitionProperty
} from "mongoose"



interface IProductSchema {
  user?: Types.ObjectId;
  name?: string;
  email?: string;
  isAdmin?: boolean;
  
}

const productSchema: Schema = new Schema<IProductSchema>({
  user: { 
    type: mongoose.Schema.Types.ObjectId, 
    required: true,
    ref: "User"
  },
  name: { type: String, required: true },
  email: { type: String, required: true , unique: true},
  isAdmin: { type: Boolean, required: true, default: false },
  
}, {
  timestamps: true
});

const Product = mongoose.model<IProductSchema>('Product', productSchema);
export default Product;
