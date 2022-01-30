const express = require('express');
const PORT = process.env.PORT | 5000;
const app = express();

app.get('/api/blogs', (req, res) => {
    res.send('Server is running');
})


app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))