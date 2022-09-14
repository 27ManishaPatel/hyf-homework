const { response } = require('express');
const express = require('express');
const knex = require('../database');

const router = express.Router();

// GET /api/snippets
router.get('/', async (req, res) => {
    const snippets = await knex("snippets")
    res.json(snippets)
});

//TODO: POST /api/snippets
router.post("/", async (request, response) => {
  const authHeader = req.get("Authorization")
  const user = await knex("users").where({
    token: authHeader
  })
  console.log("user", user)

    const userId = 1;
    const result = await knex("snippets").insert({
    ...req.body,
    user_id : userId,
    })
    res.json(result)
  })


module.exports = router;