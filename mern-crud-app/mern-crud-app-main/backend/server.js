import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const allowedOrigins = process.env.FRONTEND_URL
    ? process.env.FRONTEND_URL.split(",").map((origin) => origin.trim())
    : true;

app.use(cors({
    origin: allowedOrigins,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"]
}));

app.use(morgan("dev"));

const port = process.env.PORT || 3000;
const mongoUri = process.env.MONGO_URI;
const dbName = process.env.DB_NAME || "mern_crud_app";

// Connect to MongoDB
const connectDB = async () => {
    if (!mongoUri) {
        console.warn("MONGO_URI is not set. Server will run without a database connection until MONGO_URI is configured.");
        return;
    }
    try {
        await mongoose.connect(mongoUri, {
            dbName
        });
        console.log("MongoDB Connected Successfully");
    } catch (error) {
        console.error("MongoDB Connection Failed:", error.message);
    }
};

const ensureDBConnected = (req, res, next) => {
    if (mongoose.connection.readyState !== 1) {
        return res.status(503).send({
            message: "Database not connected. Please configure MONGO_URI in environment variables."
        });
    }
    next();
};

  // Define the Post schema and model
const postSchema = new mongoose.Schema({
  title: String,
  content: String,
});
const Post = mongoose.model("Post", postSchema);

//CRUD operations for Blog Posts
app.use("/api/v1/posts", ensureDBConnected);

// Create a new post
app.post("/api/v1/posts", async (req, res) => {
  try {
    const post = new Post(req.body);
    await post.save();
    res.status(201).send({ message: "Post created successfully", data: post });
  } catch (err) {
    res.status(400).send(err);
  }
});
//Read all posts
app.get("/api/v1/posts", async (req, res) => {
  try {
    const posts = await Post.find();
    res
      .status(200)
      .send({ message: "Posts retrieved successfully", data: posts });
  } catch (err) {
    res.status(400).send(err);
  }
});

//Read post by id
app.get("/api/v1/posts/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).send({ message: "Post not found" });
    }
    res
      .status(200)
      .send({ message: "Post retrieved successfully", data: post });
  } catch (err) {
    res.status(400).send(err);
  }
});

//Update post by id
app.put("/api/v1/posts/:id", async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!post) {
      return res.status(404).send({ message: "Post not found" });
    }
    res.status(200).send({ message: "Post updated successfully", data: post });
  } catch (err) {
    res.status(400).send(err);
  }
});
//Delete post by id
app.delete("/api/v1/posts/:id", async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    if (!post) {
      return res.status(404).send({ message: "Post not found" });
    }
    res.status(200).send({ message: "Post deleted successfully", data: post });
  } catch (err) {
    res.status(400).send(err);
  }
});
//Test route
app.get("/", (req, res) => {
  res.send({
    message: "Welcome to Express Test",
    dbConnected: mongoose.connection.readyState === 1,
  });
});

//Start the server
app.listen(port, "0.0.0.0", () => {
  console.log(`Server running on port ${port}`);
});

connectDB();
