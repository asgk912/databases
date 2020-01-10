DROP DATABASE chat;

CREATE DATABASE chat;

USE chat;

/* Create other tables and define schemas for them here! */
-- CREATE TABLE rooms (
--   id INT(11) AUTO_INCREMENT PRIMARY KEY,
--   name CHAR(255) NOT NULL UNIQUE
-- );

CREATE TABLE users (
  id INT(11) AUTO_INCREMENT PRIMARY KEY,
  name CHAR(255) NOT NULL UNIQUE
);

-- CREATE TABLE friends (
--   user_id INT(11),
--   friend_id INT(11),
--   FOREIGN KEY (user_id)
--     REFERENCES users(id),
--   FOREIGN KEY (friend_id)
--     REFERENCES users(id)
-- );

CREATE TABLE messages (
  /* Describe your table here.*/
  id INT(11) AUTO_INCREMENT PRIMARY KEY,
  text CHAR(140) NOT NULL,
  user_id INT(11),
  roomname CHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
  -- FOREIGN KEY (room_id) REFERENCES rooms(id)
);

/*  Execute this file from the command line by typing:
 *    mysql -u student -pstudent < server/schema.sql
 *  to create the database and the tables.*/

