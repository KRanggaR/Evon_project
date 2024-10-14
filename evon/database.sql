create database cosmictech;

use cosmictech;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    middle_name VARCHAR(50),
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    gender VARCHAR(10),
    phone VARCHAR(15),
    address VARCHAR(255),
    postal_code VARCHAR(6),
    city VARCHAR(100),
    state VARCHAR(100)
);

select * from users;
