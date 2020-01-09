CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  id INT(11) AUTO_INCREMENT PRIMARY KEY,
  text CHAR(140) NOT NULL,
  created_at TIMESTAMP NOT NULL,
  updated_at TIMESTAMP NOT NULL
);

/* Create other tables and define schemas for them here! */
CREATE TABLE rooms (
  id INT(11) AUTO_INCREMENT PRIMARY KEY,
  name CHAR(255) NOT NULL
);

CREATE TABLE users (
  id INT(11) AUTO_INCREMENT PRIMARY KEY,
  name CHAR(255) NOT NULL,
  current_room INT(11) NOT NULL,
  FOREIGN KEY (current_room)
    REFERENCES rooms(id)
);

CREATE TABLE friends (
  user_id INT(11),
  friend_id INT(11),
  FOREIGN KEY (user_id)
    REFERENCES users(id),
  FOREIGN KEY (friend_id)
    REFERENCES users(id)
);

CREATE TABLE UMRjoin (
  message_id INT(11),
  user_id INT(11),
  room_id INT(11),
  FOREIGN KEY (message_id)
    REFERENCES messages(id),
  FOREIGN KEY (user_id)
    REFERENCES users(id),
  FOREIGN KEY (room_id)
    REFERENCES rooms(id)
);



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

