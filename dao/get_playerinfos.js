const mysql = require('mysql2'); // Base de données MySQL

module.exports = {
    execute: async (client, message, args, db) => {
        let query = `SELECT * FROM user WHERE user_id = ?`;

        let data = [message.author.id];
        const [rows, fields] = await db.promise().query(query, data);
        return rows;
    }
}