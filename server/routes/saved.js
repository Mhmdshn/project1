import express from "express";
import { getSavedItems, addSaved, deleteSaved } from "../controllers/save.js";

const router = express.Router();

router.get("/", getSavedItems);
router.post("/", addSaved);
router.delete("/", deleteSaved);

export default router;
