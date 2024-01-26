import express from "express";
const app = express();
import authRoutes from "./routes/auth.js";
import guestRoutes from "./routes/guest.js";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
import allpostsRoutes from "./routes/allposts.js";
import commentRoutes from "./routes/comments.js";
import likeRoutes from "./routes/likes.js";
import savedRoutes from "./routes/saved.js";
import relationshipRoutes from "./routes/relationships.js";
import storyRoutes from "./routes/stories.js";
import cors from "cors";
import multer from "multer";
import cookieParser from "cookie-parser";

//middlewares
app.use(
  cors({
    origin: "*",
  })
);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true);
  next();
});
app.use(express.json());

app.use(cookieParser());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../client/public/upload");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage: storage });

app.post("/api/upload", upload.single("file"), (req, res) => {
  const file = req.file;
  res.status(200).json(file.filename);
});

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/allposts", allpostsRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/likes", likeRoutes);
app.use("/api/relationships", relationshipRoutes);
app.use("/api/stories", storyRoutes);
app.use("/api/guest", guestRoutes);
app.use("/api/saved", savedRoutes);

app.listen(8801, () => {
  console.log("API working!");
});
