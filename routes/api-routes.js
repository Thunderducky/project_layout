const connection = require("../config/connection");
module.exports = function(app){
    // Read Route  
    app.get("/api/chirps", function(req, res){
        connection.query("SELECT * FROM chirps ORDER BY created_at DESC", function(err, data){
            res.json(data)
        })
    })
    // Create Route
    app.post("/api/chirps", function(req, res){
        connection.query(`
            INSERT INTO chirps (author, body, created_at) 
            VALUES (?, ?, ?)`, 
            [req.body.author, req.body.body, req.body.created_at],
            function(err, data){
                if(err){
                    throw err;
                }
                res.json(data)
            }
        );
    })
};