const {createPool} = require('mysql2/promise');
require('dotenv').config();

const pool = createPool({
    host: process.env.DBHOST,
    user: process.env.DBUSER,
    password: process.env.DBPASS,
    port: process.env.DBPORT,
    database: process.env.DBNAME,
});

module.exports = {pool};
