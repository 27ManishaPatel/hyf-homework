-- Active: 1660903376490@@127.0.0.1@3306@hyf_lesson_1

SELECT * FROM user;
SELECT * FROM task;

SELECT * FROM `user` INNER JOIN task ON user_id = task.user_id;

SELECT COUNT(*)
FROM `user`
    INNER JOIN task ON user.id = task.user_id;

SELECT COUNT(*)
FROM `user`
    LEFT JOIN task ON user.id = task.user_id;

SELECT COUNT(*)
FROM `user`
    RIGHT JOIN task ON user.id = task.user_id;

SELECT * FROM task WHERE task.user_id IS NULL;

SELECT *
FROM `user`
    LEFT JOIN task ON user.id = task.user_id
WHERE task.user_id IS NULL;

SELECT *
FROM task
    LEFT JOIN `user` ON user.id = task.user_id
WHERE user.id IS NULL;

SELECT *
FROM user
    RIGHT OUTER JOIN `task` ON task.user_id = user.id
WHERE
    task.user_id IS NULL
    OR user.id IS NULL;

SELECT COUNT(*) FROM user;

SELECT COUNT(*) FROM task;

SELECT COUNT(*)
FROM user
    CROSS JOIN task ON task.user_id = user.id;

SELECT
    user.name,
    COUNT(*) AS task_number,
    status.name
FROM task
    INNER JOIN user ON user_id = task.user_id
    INNER JOIN status ON task.status_id = status_id
GROUP BY
    status.name,
    user.name
HAVING
    task_number >= 2
    AND status.name = "Done"
ORDER BY task_number DESC
LIMIT 2;

SELECT * FROM task;