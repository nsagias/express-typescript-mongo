import * as dotenv from "dotenv";
import mongoose, { Document, Model, model, Types, Schema, Query, ConnectOptions } from "mongoose"

dotenv.config();

const MONGO_USER: string = process.env.MONGO_USER as string; 
const MONGO_PASSWORD: string = process.env.MONGO_PASSWORD as string; 
const MONGO_PATH: string = process.env.MONGO_PATH as string; 


const connectDB = async () => {
  try {
    const conn = await mongoose.connect(`mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}${MONGO_PATH}`, <ConnectOptions>{
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error: any) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
