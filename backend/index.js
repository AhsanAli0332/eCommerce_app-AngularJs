const fs = require('fs');
const express = require('express');
const app = express();
const port = 3500;

let data = fs.readFileSync('./data.json','utf-8');
data = JSON.parse(data);

app.get('/cat', (req, res) => {
    let categories = data.categories.map(cat => {
        return {
            "catId": cat.catId,
            "catName": cat.catName
        };
    })
    res.status(200).json(JSON.stringify(categories));
})

app.get("/cat/:id", (req,res) => {

    const id = +req.params.id;
    const category = data.categories.find(cat => cat.catId === id);
    if(category) {
        res.status(200).json(JSON.stringify(category));
        return;        
    }
    res.status(404).send();
})

app.listen(port, () => {
    console.log("Listening to port # ", port)
})