const express = require('express');
const cors = require('cors');

const app = express();

app.get('/api/blogs', cors(), (req, res) => {
    res.send('Server is running now');
})


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))