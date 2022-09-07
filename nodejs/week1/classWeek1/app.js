const knex = require('knex')({
    client: 'mysql2',
    connection: {
        host : '127.0.0.1',
        port: 3306,
        user: 'root',
        password: '12345678',
        database: 'hyf_node_week1'
    }
})


const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello Class!')
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})

app.get('/info', async(req, res) => {
    const dbResult = await knex.raw('SELECT VERSION()')
    const row = dbResult[0][0]

    res.json({
        nodeVersion : process.version,
        mysqlVersion: row['VERSION()']
    })
})

app.get('/all-users', async(req, res) => {
    const dbResult = await knex.raw('SELECT * FROM users')
    const rows = dbResult[0]
    res.json({
       rows
    })
})

app.get('/unconfirmed-users', async(req, res) => {
    const dbResult = await knex.raw('SELECT * FROM users WHERE confirmed_at IS NULL')
    const rows = dbResult[0]
    res.json({
       rows
    })
})

app.get('/gmail-users', async(req, res) => {
    const dbResult = await knex.raw('SELECT * FROM users WHERE email LIKE "%gmail.com" ')
    const rows = dbResult[0]
    res.json({
       rows
    })
})

app.get('/2022-users', async(req, res) => {
    const dbResult = await knex.raw('SELECT * FROM users WHERE YEAR(created_at) = 2022 ')
    const rows = dbResult[0]
    res.json({
       rows
    })
})

app.get('/user-count', async(req, res) => {
    const dbResult = await knex.raw('SELECT COUNT(users.id) AS NO_OF_USER FROM users')
    const rows = dbResult[0]
    res.json({
       rows
    })
})

















