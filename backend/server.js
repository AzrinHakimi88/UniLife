const express = require('express');
const app = express();
const port = 3000;

dbconnect = require('./dbconnect');


app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});