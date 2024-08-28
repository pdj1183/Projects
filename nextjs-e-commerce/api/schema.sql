DROP TABLE IF EXISTS post;
DROP TABLE IF EXISTS user;

CREATE TABLE post (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT UNIQUE NOT NULL,
    description TEXT NOT NULL,
    path TEXT UNIQUE NOT NULL
);

CREATE TABLE user (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL
);

insert into post values(1, 'wow!', '11', '/GreyRockHeader.jpg');
insert into post values(2, 'test', '2', './');
insert into post values(3, 'bob!', 'test', '/tatatat/');
