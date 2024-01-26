import express from "express";
import { getUser, updateUser } from "../controllers/user.js";
import { getAllUsers } from "../controllers/getAllUsers.js";

const router = express.Router();

router.get("/all/", getAllUsers);
router.get("/find/:userId", getUser);
router.put("/", updateUser);

export default router;
