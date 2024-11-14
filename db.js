const { Pool } = require('pg');
require('dotenv').config();
postgresql://taskM.db_owner:BbDvClQ43OLA@ep-calm-thunder-a5kfnaw1.us-east-2.aws.neon.tech/taskM.db?sslmode=require
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

module.exports = pool;
