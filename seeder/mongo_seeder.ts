import mongoose from "mongoose";
import dotenv from "dotenv";
import users from "../data/users_db";
import products from "../data/products_seeder";
import User from "../models/userModel";
import Product from "../models/productModel";
import connectDB from "../config/db";

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await User.deleteMany();
    await Product.deleteMany();

    const createUsers = await User.insertMany(users);
    const adminUser = createUsers[0]._id;
    
  } catch (error) {
    
  };
};

 