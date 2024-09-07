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
  email TEXT UNIQUE NOT NULL,
  username TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL,
  role TEXT NOT NULL
);

insert into post values(1, 'Pier!', 'Huntington Beach Peir at Sunset!', '/images/Post-1.jpg');
insert into post values(2, 'Trailblazer', 'Walking into the sunlight!', '/images/Post-2.jpg');
insert into post values(3, 'The Path Not Taken', 'Follow your own path!', '/images/Post-3.jpg');
insert into post values(4, 'Sun', 'test', '/images/Post-4.jpg');
insert into post values(5, 'Lifeguard', 'test', '/images/Post-5.jpg');
insert into post values(6, 'Blast', 'test', '/images/Post-6.jpg');
insert into post values(7, 'Pleasent Watch', 'test', '/images/Post-7.jpg');
insert into post values(8, 'Beach Day', 'test', '/images/Post-8.jpg');
INSERT INTO user VALUES(1, 'test@gmail.com', 'test', 'test-password', 'admin');
