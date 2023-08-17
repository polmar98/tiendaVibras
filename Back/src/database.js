const {createPool} = require('mysql2/promise');

const pool = createPool({
    host: '127.0.0.1',
    user: 'ingreso',
    password: 'gghBP3JpG0',
    port: 3310,
    database: 'vibras',
});

module.exports = {pool};
