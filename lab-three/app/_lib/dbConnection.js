import mongoose from "mongoose";

export async function dbConnection() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/front");
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
}