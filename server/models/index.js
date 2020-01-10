var db = require('../db');

module.exports = {
  messages: {
    get: function () { // a function which produces all the messages
      db.query('SELECT m.text, m.roomname, u.name FROM messages m, users u where m.user_id = u.id', (err, result, fields) => {
        return result;
      });
    },
    post: function (message, callback) { // a function which can be used to insert a message into the database

      // check if there is a duplicate in user table
      db.query(`SELECT u.id FROM users u where u.name = '${message.username}'`, (err, result, fields) => {
        console.log(`Result Length: ${result.length}`);
        if (err && result.length !== 1) {
          console.log(err);
        } else if (result.length === 1) {
          db.query(`INSERT INTO messages(text, user_id, roomname) VALUES ("${message.message}", (SELECT id from users where users.name = '${message.username}'), '${message.roomname}');`,
            (err) => {
              if (err) {
                console.log(err);
              // throw new Error('Error Inserting Message to Table: Messages');
              } else {
                console.log('Success in Inserting Message to Table: Messages');
                callback();
              }
            });
        } else {
          // insert username to user table
          db.query(`INSERT INTO users(name) VALUES ('${message.username}');`, (err) => {
            if (err) {
              console.log(err);
            } else {
              console.log(message.message);
              // insert message to mesasage table
              db.query(`INSERT INTO messages(text, user_id, roomname) VALUES ('${message.message}', (SELECT id from users where users.name = '${message.username}'), '${message.roomname}');`,
                (err) => {
                  if (err) {
                    console.log(err);
                  // throw new Error('Error Inserting Message to Table: Messages');
                  } else {
                    console.log('Success in Inserting Message to Table: Messages');
                    callback();
                  }
                });
            }
          });
        }
      });
    }
  },

  users: {
    // Ditto as above.
    get: function () {
      db.query('SELECT * FROM users ', () => {});

    },
    post: function (username, callback) {
      db.query(`INSERT INTO users (name) VALUES ('${username}');`, (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log('Success in Inserting Username to Table: Users');
          callback();
        }
      });
    }
  }
};

