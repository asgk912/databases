var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {}, // a function which handles a get request for all messages
    post: function (req, res) {
      var message = req.body;
      models.messages.post(message, (err) => {
        if (err) {
          throw new Error('Error in Inserting New Message');
        } else {
          res.statusCode = 201;
          res.end();
        }
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {
      // console.log(typeof req.body);
      var username = req.body.username;
      models.users.post(username, (err)=> {
        if (err) {
          throw new Error('Error in Inserting New User');
        } else {
          res.statusCode = 201;
          res.end();
        }
      });
    }
  }
};

