import { Pool } from "pg";

const pool = new Pool({
  user: process.env.DB_USERNAME,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: 5432,
  max: 20,
  connectionTimeoutMillis: 2000,
  idleTimeoutMillis: 30000,
})

export default pool;
