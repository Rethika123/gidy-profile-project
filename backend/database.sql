CREATE DATABASE profile_db;

USE profile_db;

CREATE TABLE profile (
 id INT PRIMARY KEY AUTO_INCREMENT,
 name VARCHAR(100),
 bio TEXT,
 profile_picture TEXT,
 skills TEXT,
 linkedin TEXT,
 github TEXT
);

INSERT INTO profile (name,bio,skills,linkedin,github)
VALUES (
 'Rethika P',
 'Full Stack Developer',
 'React.js,Node.js,Express.js,MySql',
 'https://linkedin.com',
 'https://github.com'
);
