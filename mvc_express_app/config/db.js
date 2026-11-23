import mongoose from "mongoose";

const connectDB = async () => {
    const uri = process.env.MONGO_URL || process.env.MONGO_URI;
    if (!uri) {
        console.warn("MONGO_URL/MONGO_URI is not set. Running without DB connection.");
        return;
    }
    try {
        await mongoose.connect(uri, {
            dbName: process.env.DB_NAME || "movieDB"
        });

        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("MongoDB connection failed:", error.message);
    }
};

export default connectDB;