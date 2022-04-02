const mysql = require('mysql2'); // Base de données MySQL


module.exports = {
    execute: (client, message, db) => {

        // Fetch user if he exist before update experience
        let select_query = `SELECT * FROM user WHERE user_id = ?`;

        let select_data = [message.author.id];
        db.query(select_query, select_data, function (err, select_result, fields) {
            if (err) throw err;
            if(select_result.length == 0){ // If user don't exist
                // Create user
                var insert_query = "INSERT INTO user (user_id, class, level, experience, reputation, title, gold, avatar_id, gender) VALUES (?, 'adventurer', 1, 0, 0, 'Debutant', 0, 32000, 'm')";
                let insert_data = [message.author.id];
                db.query(insert_query, insert_data, function (err, result, fields) {
                    if (err) throw err;
                    console.log("New user : " + message.author.username);
                });
            }
            else
            {
                // Check if level up 
                // XP System Lv 2 = 200 exp, Lv3 = 300 exp, Lv4 = 400 exp etc....
                let exp = parseInt(select_result[0].experience + 50);
                let gold = parseInt(select_result[0].level * 100); // Earn gold method : Level * 100, so if u are level 5, u earn 500 golds
                let update_query = `UPDATE user SET experience = experience + ?, gold = gold + ? WHERE user_id = ?`; // Query if dont level up
    
                let update_data = [50, gold, message.author.id];

                if(exp / 100 >= select_result[0].level + 1) // On préshot le +50 d'xp et on check si par exemple 400 xp = a 4, si oui bah il up et on reset l'xp a 0
                {
                    update_query = `UPDATE user SET experience = 0, gold = gold + ?, level = level + 1 WHERE user_id = ?`;
                    update_data = [gold, message.author.id];

                    // Level up 
                    levelup = parseInt(select_result[0].level + 1);
                    message.channel.send("Bsahtek <@!" + message.author.id + ">, tu est passé au niveau " + levelup);
                }
                db.query(update_query, update_data, (error, results, fields) => {
                if (error){ return console.error(error.message); }
                });
            }
        });

        

    }
}

// UPDATE your_table SET displayorder = displayorder + 1 WHERE displayorder > 2;