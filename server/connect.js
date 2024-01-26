import mysql from "mysql";

export const db = mysql.createConnection({
  host: "localhost",
  user: "Shaan",
  password: "1046496",
  database: "kai3",
});
