const express = require('express');
const app = express();
const router = express.Router();

app.use('/api/snippets', require('./api/snippets'));
const port = process.env.PORT || 3000

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello class!')
});
 
 app.listen(port, () => {
    console.log(`listing on  port ${port}`)
 });

 module.exports = router;