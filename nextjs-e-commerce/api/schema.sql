DROP TABLE IF EXISTS post;
DROP TABLE IF EXISTS user;

CREATE TABLE user (
    user_id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE NOT NULL,
    username TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    role TEXT NOT NULL
);

CREATE TABLE post (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    title TEXT UNIQUE NOT NULL,
    description TEXT NOT NULL,
    genre TEXT NOT NULL,
    path TEXT UNIQUE NOT NULL,
    FOREIGN KEY (user_id) REFERENCES user(user_id)
);


insert into post values(1, 1, 'Pier!', 'Huntington Beach Peir at Sunset!', 'beach', '/images/Post-1.jpg');
insert into post values(2, 1, 'Trailblazer', 'Walking into the sunlight!', 'beach', '/images/Post-2.jpg');
insert into post values(3, 1, 'The Path Not Taken', 'Follow your own path!', 'beach', '/images/Post-3.jpg');
insert into post values(4, 1, 'Sun', 'test', 'beach', '/images/Post-4.jpg');
insert into post values(5, 1, 'Lifeguard', 'test', 'beach', '/images/Post-5.jpg');
insert into post values(6, 1, 'Blast', 'test', 'beach', '/images/Post-6.jpg');
insert into post values(7, 1, 'Pleasent Watch', 'test', 'beach', '/images/Post-7.jpg');
insert into post values(8, 1, 'Beach Day', 'test', 'beach', '/images/Post-8.jpg');
INSERT INTO user VALUES(1, 'test@gmail.com', 'test', 'test-password', 'admin');
