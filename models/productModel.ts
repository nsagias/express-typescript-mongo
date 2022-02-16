import mongoose, { 
  Document, 
  Model, 
  model, 
  Types, 
  Schema, 
  Query, 
  ConnectOptions, 
  mongo, 
  SchemaTypeOptions } from "mongoose"

interface IUserSchema {
  type: mongoose.Schema.Types.ObjectId;
  required: number;
  ref: string;
}

interface IProductSchema {
  user: string;
  name: string;
  email: string;
  isAdmin: boolean;

}

const productSchema: Schema = new mongoose.Schema<IProductSchema>({
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

const Product = mongoose.model('Product', productSchema);
export default Product;
