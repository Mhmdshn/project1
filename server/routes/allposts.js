import express from "express";
import { getAllPosts } from "../controllers/allposts.js";

const router = express.Router();

router.get("/", getAllPosts);

export default router;
