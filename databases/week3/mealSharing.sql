-- Active: 1660903376490@@127.0.0.1@3306@meal_sharing
CREATE DATABASE meal_sharing;
USE meal_sharing;
CREATE Table meal (
    id INT AUTO_INCREMENT NOT NULL,
    title VARCHAR(20) NOT NULL,
    description TEXT NOT NULL,
    location VARCHAR(100) NOT NULL, 
    when_date DATETIME, 
    max_reservations INT UNSIGNED NOT NULL,
    price DECIMAL(5, 2), 
    created_date DATETIME,
    PRIMARY KEY (id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE reservation (
    id INT AUTO_INCREMENT NOT NULL,
    number_of_guests INT NOT NULL,
    meal_id INT NOT NULL,
    created_date DATETIME NOT NULL,
    contact_phonenumber VARCHAR(15),
    contact_name VARCHAR(255) NOT NULL,
    contact_email VARCHAR(255) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN key (meal_id) REFERENCES meal(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


CREATE Table review (
    id INT AUTO_INCREMENT NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    meal_id INT NOT NULL,
    stars INT,
    created_date DATETIME NOT NULL,
    PRIMARY key (id),
    FOREIGN key (meal_id) REFERENCES meal(id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--Create these queries
--Meal
--Get all meals
SELECT * FROM meal;
--Add a new meal
INSERT INTO meal (id, title, description, location, when_date, max_reservations, price, created_date) 
VALUES(1, 'Veg pulao', 'Rice with mix vegitables served with raita', 'Indian Spice Soborg', '2022-07-30 13:00:00', 8, 300.00, '2022-07-30');

INSERT INTO meal (id, title, description, location, when_date, max_reservations, price, created_date) 
VALUES(2, 'Pasta', ' Baked feta pasta with Butternut squash mac and cheese', 'Indian Royal Lyngby', '2022-06-30 13:00:00', 5, 250.00, '2022-06-30');

INSERT INTO meal (id, title, description, location, when_date, max_reservations, price, created_date) 
VALUES(3, 'Onion Soup', 'Boiled onions, grated cheese and bread crountons', 'Delicasa Lyngby', '2022-07-26 13:00:00', 4, 250.00, '2022-07-26');

INSERT INTO meal (id, title, description, location, when_date, max_reservations, price, created_date) 
VALUES(4, 'Mushroom Soup', 'Wild Mushroom, sour cream, scallions', 'Tasty soup valby', '2022-07-15 18:00:00', 8, 180.00, '2022-07-15');

--Get a meal with any id, fx 1
SELECT * FROM meal
WHERE meal.id = 3;

--Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE meal 
SET title = 'Paneer Buttur masala', description = 'Cottage cheese in rich creamy sauce with onions and tomato puree'
WHERE id = 3;

--Delete a meal with any id, fx 1
DELETE FROM meal
WHERE id = 4;

--Reservation
--Add a new reservation
INSERT INTO reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES (9, 2, '2022-06-30', 91919191, 'Manisha Patel', 'manisha@gmail.com'),
(5, 1, '2022-07-30', 91676767, 'Chirag', 'chirag@gmail.com'),
(6, 3, '2022-05-28', 91546545, 'Sachi Patel', 'sachi@gmail.com'),
(8, 2, '2022-07-13', 91898989, 'Jiaan', 'jiaan@gmail.com');

--Get a reservation with any id, fx 1
SELECT * from reservation
WHERE id = 3;

--Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE reservation
SET number_of_guests = 8,  meal_id = 1
WHERE id = 4;

--Delete a reservation with any id, fx 1
DELETE FROM reservation
WHERE id = 1;

--Review
--Get all review
SELECT * FROM review;

--Add a new review
INSERT INTO review (title, description, meal_id, stars, created_date)
VALUES('Perfect!', 'it was so perfect and delicious', 2, 5, '2022-08-25'),
( 'Good!', 'tastes very nice', 3, 4,'2022-05-25'),
("Ok!", 'Average vagetables quality', 1, 3, '2022-06-27'),
('Amazing', 'taste was so good', 1, 5, '2022-07-18');

--Get a review with any id, fx 1
SELECT * FROM review
WHERE id = 3;

--Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE review
SET title = 'Love it!'
WHERE id = 4;

--Delete a review with any id, fx 1
DELETE FROM review
WHERE id = 1;

--Additional queries
--Get meals that has a price smaller than a specific price fx 90
Select * FROM meal
WHERE meal.price < 260;

--Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
SELECT * FROM meal
WHERE title LIKE 'Rød grød med%';

--Get meals that has been created between two dates
SELECT * FROM meal
WHERE created_date BETWEEN '2022-05-22' AND '2022-07-22';

--Get only specific number of meals fx return only 5 meals
SELECT * FROM meal
LIMIT 2;
--Get the meals that have good reviews
SELECT meal.title, review.stars AS stars
FROM meal
JOIN review
ON review.meal_id = meal.id
WHERE review.stars > 4;

--Get reservations for a specific meal sorted by created_date
SELECT *
FROM reservation
WHERE meal_id = 1
ORDER BY created_date DESC;

--Sort all meals by average number of stars in the reviews
SELECT meal.title, SUM(review.stars) / COUNT(review.id) AS average FROM meal
JOIN review ON review.meal_id = meal.id
GROUP BY meal.title
ORDER BY average;