import * as dotenv from "dotenv";
import mongoose, { Document, Model, model, Types, Schema, Query, ConnectOptions } from "mongoose"

dotenv.config();
const MONGO_URI: string = process.env.MONGO_URI as string ;

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGO_URI, <ConnectOptions>{
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
