const express = require('express');
const PORT = process.env.PORT | 5000;
const app = express();

app.get('/api/blogs', (req, res) => {

})


app.listen(`${PORT}`)