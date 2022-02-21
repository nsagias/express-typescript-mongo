import mongoose from "mongoose";
import dotenv from "dotenv";
import users from "../data/users_db";
import products_2 from "../data/products_2_db";
import User from "../models/userModel";
import Product from "../models/productModel";
import connectDB from "../config/db";

dotenv.config();

connectDB();

