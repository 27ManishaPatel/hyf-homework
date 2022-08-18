-- Active: 1660473813574@@0.0.0.0@3306@hyf_lesson_1

--1. Find out how many tasks are in the task table
SELECT COUNT(id) 
FROM task;

--2. Find out how many tasks in the task table do not have a valid due date
SELECT COUNT(id) 
FROM task 
WHERE due_date IS NULL;

--3. Find all the tasks that are marked as done
SELECT task.title AS TITLE, status.name AS STATUS 
FROM task 
JOIN status ON task.status_id = status.id
WHERE status.name = 'Done';

--4 Find all the tasks that are not marked as done
SELECT task.title AS TITLE, status.name AS STATUS 
FROM task 
JOIN status ON task.status_id = status.id
WHERE status.name <> 'Done';

--5. Get all the tasks, sorted with the most recently created first
SELECT * 
FROM task
ORDER BY created DESC;

--6. Get the single most recently created task
SELECT * 
FROM task
ORDER BY created DESC
LIMIT 1;

--7. Get the title and due date of all tasks where the title or description contains database
SELECT task.title AS TITLE, task.due_date AS DUE_DATE
FROM task
WHERE task.title LIKE '%database%' OR task.description LIKE '%database%';
--8. Get the title and status (as text) of all tasks
SELECT CONCAT(task.title, '  ', status.name) AS TEXT
FROM task
INNER JOIN status ON status.id = task.status_id;

--9. Get the name of each status, along with a count of how many tasks have that status
SELECT  status.name, COUNT(task.title)
FROM status
INNER JOIN task ON status.id = task.status_id 
GROUP BY status.name ;

--10. Get the names of all statuses, sorted by the status with most tasks first
SELECT  status.name
FROM status
INNER JOIN task ON status.id = task.status_id 
GROUP BY status.name
ORDER BY COUNT(*) DESC ;
