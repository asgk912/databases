var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "student", password "student",
// and to the database "chat".
var dbConnection = mysql.createConnection({
  user: 'student',
  password: 'student',
  database: 'chat'
});

dbConnection.connect((err) => {
  if (err) {
    throw new Error('Error connecting to chat DB');
  } else {
    console.log('Connection established to chat DB');
  }
});

module.exports = dbConnection;