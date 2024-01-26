import express from "express";
import { getUsersForGuests } from "../controllers/usersforguests.js";

const router = express.Router();

router.get("/", getUsersForGuests);

export default router;
