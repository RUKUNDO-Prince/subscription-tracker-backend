/* eslint-disable no-undef */
import mongoose from "mongoose";
import { DB_URI, NODE_ENV } from "../config/env.js";

if (!DB_URI) {
  throw new Error("MongoDB URI is not defined in environment variables.");
}

const connectToDatabase = async () => {
    try {
        await mongoose.connect(DB_URI);
        console.log("DATABASE connected successfully!");
    } catch (error) {
        console.log("Error connecting to DATABASE:", error);
        process.exit(1);
    }
}

export default connectToDatabase;