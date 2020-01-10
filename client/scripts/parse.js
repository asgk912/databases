var Parse = {

  // server: `http://parse.${window.CAMPUS}.hackreactor.com/chatterbox/classes/messages`,
  server: 'http://localhost:3000',

  create: function(message, successCB, errorCB = null) {
    // post messages
    $.ajax({
      url: Parse.server + '/messages',
      type: 'POST',
      data: JSON.stringify(message),
      contentType: 'application/json',
      success: successCB,
      error: errorCB || function (error) {
        console.error('chatterbox: Failed to create message', error);
      }
    });
  },

  // get all messages
  readAll: function(successCB, errorCB = null) {
    $.ajax({
      url: Parse.server + '/messages',
      type: 'GET',
      data: { order: '-createdAt' },
      contentType: 'application/json',
      success: successCB,
      error: errorCB || function(error) {
        console.error('chatterbox: Failed to fetch messages', error);
      }
    });
  }

};