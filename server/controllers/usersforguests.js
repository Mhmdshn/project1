import { db } from "../connect.js";
import jwt from "jsonwebtoken";
import moment from "moment";

export const getUsersForGuests = (req, res) => {
  const q = `SELECT * FROM users`;

  const values = "";

  db.query(q, values, (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data);
  });
};
