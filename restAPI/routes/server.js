const express = require('express');
const server = express();
const port = 3000;
const body_parser = require('body-parser');

let data = require('./data');

server.get("/items", (req, res) => {
    res.json(data);
});

server.get("/items/:id", (req, res) => {
    const itemId = req.params.id;
    const item = data.find(_item => _item.id === itemId);
 
    if (item) {
       res.json(item);
    } else {
       res.json({ message: `item ${itemId} doesn't exist`})
    }
});

server.get("/json", (req, res) => {
    res.json({ message: "Hello world" });
});

 server.get("/", (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

server.post("/items", (req, res) => {
    const item = req.body;
    console.log('Adding new item: ', item);
    
    data.push(item)
 
    res.json(data);
 });

 server.put("/items/:id", (req, res) => {
    const itemId = req.params.id;
    const item = req.body;
    console.log("Editing item: ", itemId, " to be ", item);
 
    const updatedListItems = [];
   
    data.forEach(oldItem => {
       if (oldItem.id === itemId) {
          updatedListItems.push(item);
       } else {
          updatedListItems.push(oldItem);
       }
    });
 
    data = updatedListItems;
 
    res.json(data);
 });

 server.delete("/items/:id", (req, res) => {
    const itemId = req.params.id;
 
    console.log("Delete item with id: ", itemId);
 
    // filter list copy, by excluding item to delete
    const filtered_list = data.filter(item => item.id !== itemId);
 
    // replace old list with new one
    data = filtered_list;
 
    res.json(data);
 });

server.use(body_parser.json());

server.listen(port, () => {
    console.log(`Server listening at ${port}`);
});



