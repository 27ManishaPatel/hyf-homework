-- Active: 1660903376490@@127.0.0.1@3306@hyf_lession_2

--Part 3: More queries

USE hyf_lession_2;
--Get all the tasks assigned users whose email ends in @spotify.com

SELECT
    task.title AS 'Task Name',
    user.email AS 'email'
FROM user_task
    JOIN task ON user_task.task_id = task.id
    JOIN user ON user_task.user_id = user.id
WHERE
    user.email LIKE '%@spotify.com%';

--Get all the tasks for 'Donald Duck' with status 'Not started'

SELECT
    task.title AS 'Task Name',
    user.name AS 'user',
    status.name AS status
FROM user_task
    JOIN task ON user_task.task_id = task.id
    JOIN user ON user_task.user_id = user.id
    JOIN status ON task.status_id = status.id
WHERE
     status.name = "Not started"
    AND user.name = 'Donald Duck';

--Get all the tasks for 'Maryrose Meadows' that were created in september (hint: month(created)=month_number)

SELECT
    task.title AS 'Task Name',
    user.name AS 'user',
    task.created AS created
FROM user_task
    JOIN task ON user_task.task_id = task.id
    JOIN user ON user_task.user_id = user.id
WHERE
    MONTH(created) = 09
    AND user.name = 'Maryrose Meadows';

/*Find how many tasks where created in each month, e.g. how many tasks were created in october, 
 how many tasks were created in november, etc. (hint: use group by)*/

SELECT
    COUNT(task.title) AS 'No of Task',
    MONTH(created)
FROM task
GROUP BY MONTH(created);