import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: "aws-rds-daniel.closqgcqkgc6.us-east-1.rds.amazonaws.com",
  user: "admin",
  password: "password", // Coloca tu contraseña de MySQL
  database: "aws-rds-daniel",
  port: 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default pool;
