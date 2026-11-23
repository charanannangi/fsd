import express from "express";
import dotenv from "dotenv";

import connectDB from "./config/db.js";
import todoRoutes from "./routes/todoRoutes.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

const app = express();

app.use(express.json());

app.get("/api/todos-json", async (req, res) => {
    try {
        const Todo = (await import("./model/todoModel.js")).default;
        const todos = await Todo.find();

        res.status(200).json({
            count: todos.length,
            todos
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

// Home route
app.get("/", (req, res) => {
    res.status(200).json({
        message: "Todo API is running"
    });
});

// User authentication routes
app.use("/api/users", userRoutes);

// Protected Todo routes
app.use("/api/todos", todoRoutes);

// Handle unknown routes
app.use((req, res) => {
    res.status(404).json({
        message: "Route not found"
    });
});

const startServer = async () => {
    if (!process.env.JWT_SECRET) {
        console.warn("JWT_SECRET is not set; using temporary fallback secret. Set JWT_SECRET in environment variables.");
        process.env.JWT_SECRET = "temporary_jwt_secret_change_me";
    }

    const PORT = process.env.PORT || 8000;

    app.listen(PORT, "0.0.0.0", () => {
        console.log(`Server running on port ${PORT}`);
    });

    await connectDB();
};

startServer();