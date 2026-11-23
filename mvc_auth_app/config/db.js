import mongoose from "mongoose";

const connectDB = async () => {
    const uri = process.env.MONGO_URL || process.env.MONGO_URI;
    if (!uri) {
        console.warn("MONGO_URL/MONGO_URI is not set. Running without DB connection.");
        return;
    }
    try {
        await mongoose.connect(uri, {
            dbName: process.env.DB_NAME || "TodoApp"
        });

        console.log("Connected to MongoDB successfully");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
    }
};

export default connectDB;