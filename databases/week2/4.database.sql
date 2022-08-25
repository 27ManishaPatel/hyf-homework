-- Active: 1660903376490@@127.0.0.1@3306@Book_Library

CREATE DATABASE Book_Library;

USE Book_Library;

CREATE TABLE
    `Book_Library`.`author` (
        `author_id` INT NOT NULL,
        `first_name` VARCHAR(255) NOT NULL,
        `Last_name` VARCHAR(255) NOT NULL,
        PRIMARY KEY (`author_id`)
    );

INSERT INTO
    `Book_Library`.`author` (
        `author_id`,
        `first_name`,
        `Last_name`
    )
VALUES ('1', 'Jeffrey', 'Archer');

INSERT INTO
    `Book_Library`.`author` (
        `author_id`,
        `first_name`,
        `Last_name`
    )
VALUES ('2', 'Arnold', 'Bennett ');

INSERT INTO
    `Book_Library`.`author` (
        `author_id`,
        `first_name`,
        `Last_name`
    )
VALUES ('3', 'A. E.', 'Coppard ');

INSERT INTO
    `Book_Library`.`author` (
        `author_id`,
        `first_name`,
        `Last_name`
    )
VALUES (
        '4',
        'Hans Christian',
        'Andersen’s'
    );

INSERT INTO
    `Book_Library`.`author` (
        `author_id`,
        `first_name`,
        `Last_name`
    )
VALUES ('5', 'Isak', 'Dinesen ');

INSERT INTO
    `Book_Library`.`author` (
        `author_id`,
        `first_name`,
        `Last_name`
    )
VALUES ('6', 'Pia', 'Juul');

CREATE TABLE
    `Book_Library`.`book` (
        `id` INT AUTO_INCREMENT NOT NULL,
        `book_title` VARCHAR(45) NOT NULL,
        `category` VARCHAR(45) NOT NULL,
        `language` ENUM('english', 'danish') NOT NULL,
        `author_id` INT NOT NULL,
        PRIMARY KEY (`id`),
        CONSTRAINT `author.author_id` FOREIGN KEY (`author_id`) REFERENCES `Book_Library`.`author` (`author_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
    );

INSERT INTO
    `Book_Library`.`book` (
        `id`,
        `book_title`,
        `category`,
        `language`,
        `author_id`
    )
VALUES (
        '1',
        '	The Grass is Always Greener',
        'Story',
        'english',
        '1'
    );

INSERT INTO
    `Book_Library`.`book` (
        `id`,
        `book_title`,
        `category`,
        `language`,
        `author_id`
    )
VALUES (
        '2',
        'Murder!',
        'crime',
        'english',
        '2'
    );

INSERT INTO
    `Book_Library`.`book` (
        `id`,
        `book_title`,
        `category`,
        `language`,
        `author_id`
    )
VALUES (
        '3',
        'The Higgler',
        'romantic ',
        'english',
        '3'
    );

INSERT INTO
    `Book_Library`.`book` (
        `id`,
        `book_title`,
        `category`,
        `language`,
        `author_id`
    )
VALUES (
        '4',
        'The Little Mermaid',
        'fairytale ',
        'danish',
        '4'
    );

INSERT INTO
    `Book_Library`.`book` (
        `id`,
        `book_title`,
        `category`,
        `language`,
        `author_id`
    )
VALUES (
        '5',
        'The Princess and the Pea',
        'fairytale ',
        'danish',
        '4'
    );

INSERT INTO
    `Book_Library`.`book` (
        `id`,
        `book_title`,
        `category`,
        `language`,
        `author_id`
    )
VALUES (
        '6',
        'Winter’s Tales',
        'fairytale ',
        'danish',
        '5'
    );

INSERT INTO
    `Book_Library`.`book` (
        `id`,
        `book_title`,
        `category`,
        `language`,
        `author_id`
    )
VALUES (
        '7',
        'The Murder of Halland',
        'crime',
        'danish',
        '6'
    );

CREATE TABLE
    `Book_Library`.`member` (
        `member_id` INT NOT NULL,
        `first_name` VARCHAR(255) NOT NULL,
        `Last_name` VARCHAR(255) NOT NULL,
        PRIMARY KEY (`member_id`)
    );

INSERT INTO
    `Book_Library`.`member` (
        `member_id`,
        `first_name`,
        `Last_name`
    )
VALUES ('1', 'Manisha', 'Patel');

INSERT INTO
    `Book_Library`.`member` (
        `member_id`,
        `first_name`,
        `Last_name`
    )
VALUES ('2', 'Chirag', 'Patel');

INSERT INTO
    `Book_Library`.`member` (
        `member_id`,
        `first_name`,
        `Last_name`
    )
VALUES ('3', 'Bhishan', 'Galia');

INSERT INTO
    `Book_Library`.`member` (
        `member_id`,
        `first_name`,
        `Last_name`
    )
VALUES ('4', 'Kiran', 'Kumari');

INSERT INTO
    `Book_Library`.`member` (
        `member_id`,
        `first_name`,
        `Last_name`
    )
VALUES ('5', 'Akshita', 'Dave');

INSERT INTO
    `Book_Library`.`member` (
        `member_id`,
        `first_name`,
        `Last_name`
    )
VALUES ('6', 'Nirali', 'Galia');

CREATE TABLE
    `Book_Library`.`loan` (
        `loan_id` INT NOT NULL,
        `book_id` INT NOT NULL,
        `member_id` INT NOT NULL,
        `loan_date` DATETIME NOT NULL,
        `return _date` DATETIME NOT NULL,
        PRIMARY KEY (`loan_id`),
        CONSTRAINT `member_id` FOREIGN KEY (`member_id`) REFERENCES `Book_Library`.`member` (`member_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
        CONSTRAINT `book_id` FOREIGN KEY (`book_id`) REFERENCES `Book_Library`.`book` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
    );