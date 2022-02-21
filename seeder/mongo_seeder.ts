import mongoose from "mongoose";
import dotenv from "dotenv";
import users from "../data/users_db";
import products from "../data/products_seeder";
import User from "../models/userModel";
import Product from "../models/productModel";
import connectDB from "../config/db";
import { IUserSchemaSeederItem, IUserSchemaSeederList } from "../user.models";
import { IProductBase, IProductBaseSeederList } from "../products.models";

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await User.deleteMany();
    await Product.deleteMany();

    const createUsers: IUserSchemaSeederList = await User.insertMany(users);
    const adminUser: IUserSchemaSeederItem = createUsers[0]._id;

    const sampleProducts: IProductBaseSeederList = products.map((product: IProductBase) => {
      return { ...product, user: adminUser }
    });
    
    await Product.insertMany(sampleProducts);
  } catch (error) {
    
  };
};

 