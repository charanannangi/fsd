import mongoose from "mongoose";

const connectDB = async () => {
  const uri = process.env.MONGO_URI || process.env.MONGO_URL;
  if (!uri) {
    console.warn("MONGO_URI/MONGO_URL is not set. Running without DB connection.");
    return;
  }
  try {
    await mongoose.connect(uri, {
      dbName: process.env.DB_NAME || "productsDB",
    });
    console.log(`MongoDB connected to database: ${process.env.DB_NAME || "productsDB"}`);
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
  }
};

export default connectDB;
