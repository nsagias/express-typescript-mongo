import mongoose from "mongoose";
import dotenv from "dotenv";
import users from "../data/users_db";
import products from "../data/products_seeder";
import User from "../models/userModel";
import Product from "../models/productModel";
import connectDB from "../config/db";
import { IUserSchemaSeeder } from "../user.models";
import { IProductBase, IProductBaseSeeder } from "../products.models";

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await User.deleteMany();
    await Product.deleteMany();

    const createUsers: IUserSchemaSeeder[] = await User.insertMany(users);
    const adminUser: IUserSchemaSeeder = createUsers[0]._id;

    const sampleProducts: IProductBaseSeeder[] = products.map((product: IProductBase) => {
      return { ...product, user: adminUser }
    });
    
    await Product.insertMany(sampleProducts);
  } catch (error) {
    
  };
};

 