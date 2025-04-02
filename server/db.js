const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false, // required for Render's SSL
  },
});

module.exports = pool;

/*
const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "Dragonis2.0",
    host: "localhost",
    port: 5432,
    database: "perntodo"
});

module.exports = pool;
*/
