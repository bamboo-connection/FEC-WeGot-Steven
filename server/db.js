var mysql = require('mysql');


//------------MYSQL DATABASE----------------
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
  database: 'weGotData'
})

connection.connect(function(err) {
	if (err) { 
		throw err
	};
  console.log('CONNECTED');
})





module.exports = connection;
