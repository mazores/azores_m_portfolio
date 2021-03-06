const express = require('express');
const router = express.Router();

const sql = require('../utils/sql');

router.get('/', (req, res) => {
    // should really get the user data here and then fetch it thru, but let's try this asynchronously
    console.log('at the main route');

    sql.getConnection((err, connection) => {
    // get the connection via the connection pool, and then run the query -> just one added step
	
	    if (err) { return console.log(err.message); }

        let query = "SELECT * FROM tbl_portitem";

        sql.query(query, (err, result) => {
            connection.release(); // send this connection back to the pool
            
            if (err) { throw err; console.log(err); }

            console.log(result); // should see objects wrapped in an array

            // render the home view with dynamic data
            res.render('home', { people: result });
        });
    });
})

router.get('/:id', (req, res) => {
    // should really get the user data here and then fetch it thru, but let's try this asynchronously
    console.log('at the user route');
    console.log(req.params.id); // 1, 2, 3 or whatever comes after the slash
        
    let query = `SELECT * FROM tbl_portitem WHERE ID="${req.params.id}"`;

    sql.query(query, (err, result) => {
        connection.release();

        if (err) { throw err; console.log(err); }

        console.log(result); // should see objects wrapped in an array

        // convert social property into an array
        // before we send it through
        // map is an array method that lets you map one value to another (convert it)
        // //result[0].favorite = result[0].favorite.split(",").map(function(item) {
            // //item = item.trim();
            // item.trim() removes any empty white space from text

            // //return item;
        res.json(result[0]);
    });
});
 
        // //console.log("after trim / converion:", result[0]);

        // render the home view with dynamic data
        // res.render('home', { people: result }); // data is all the details on the db, you can call it whatever you want
        //can be team, can be people, can be data; result can't be changed

    
module.exports = router;
