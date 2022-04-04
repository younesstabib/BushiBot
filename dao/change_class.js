const mysql = require('mysql2'); // Base de données MySQL

module.exports = {
    execute: async (client, message, db, class_choose) => {
        
        let update_query = `UPDATE user SET class = ? WHERE user_id = ?`; // Query if dont level up
        let update_data = [class_choose, message.user.id];

        
        db.query(update_query, update_data, (error, results, fields) => {
        if (error){ return console.error(error.message); }
        });
        console.log("Class changed for : " + message.user.username);
    }
}