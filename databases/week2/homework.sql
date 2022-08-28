-- Active: 1660903376490@@127.0.0.1@3306@hyf_lesson_1

--Part 1: Working with tasks
--Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id
INSERT INTO
    task (title, description, created, updated, due_date, status_id, user_id)
VALUES ("HackYourFuture", "to be a fullstack webdeveloper", "2022-04-22", "2022-08-21", "2022-12-20", 2, 1);

--Change the title of a task
UPDATE task
SET task.title = "HYF"
WHERE task.id = 36;

--Change a task due date
UPDATE task
SET task.due_date = "2022-04-25"
WHERE task.id = 36;

--Change a task status
UPDATE task
SET task.status_id = 1
WHERE task.id = 36;

--Mark a task as complete
UPDATE task 
SET status_id = 3
WHERE id = 36;
--delete a task 
DELETE FROM task
WHERE task.id = 36;

--Part 2: School database
CREATE DATABASE school_database
 DEFAULT CHARACTER SET = 'utf8mb4';
 
 use  school_database;
 
CREATE TABLE class (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    c_name VARCHAR(255) NOT NULL,
    begins DATETIME NOT NULL,
    ends DATETIME NOT NULL
);
CREATE TABLE student (
    id INT UNSIGNED AUTO_INCREMENT,
    s_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL unique,
    phone VARCHAR(255) unique,
    class_id INT UNSIGNED NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (class_id) REFERENCES class(id)
);
--Create an index on the name column of the student table.
CREATE INDEX index_name
ON student(s_name);
--Add a new column to the class table named status which can only have the following values: not-started, ongoing, finished (hint: enumerations).
ALTER TABLE `Class` 
ADD status ENUM('not-started', 'ongoing', 'finished') NOT NULL;
