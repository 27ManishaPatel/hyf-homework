const express = require('express')
const app = express();

const fs = require('fs');

const json = fs.readFileSync('./documents.json', 'utf8');

const jsonData = JSON.parse(json)

const port = process.env.PORT || 3000

// support parsing JSON requests
app.use(express.json())


app.get('/', (req, res) => {
    res.send('This is a search engine')
});

//GET /search
 app.get('/search',(req,res) => {
    const q = req.query.q;
    if(q === undefined){
        res.send(jsonData)
    }else{
        jsonData.forEach(obj => {
            Object.keys(obj).forEach(objKey => {
                console.log(new String(obj[objKey]))
                if(new String(obj[objKey]).includes(q)){
                   res.send(obj)
                }
            });
        });
    }
 })
//GET /documents/:id

app.get("/documents/:id", (req, res) => {
      const sortedData = jsonData.filter((data) => data.id === parseInt(req.params.id));
      if (sortedData.length === 0) {
        res.status(404).send(`Data of this ${req.params.id}  is not available !`);
      } else {
        res.json(sortedData);
      }
    });

//POST /search

// app.post("/search", (req, res) => {
//     const q = req.query.q;
//     const fields = req.body.fields

// })

app.listen(port, () =>{
    console.log(`Listing on port ${port}`)
})