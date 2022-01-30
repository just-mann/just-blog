const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.urlencoded({ extended: trut }))


// Get all the blogs from the database
app.get('/api/blogs', cors(), (req, res) => {
    res.send('Server is running.');
})


// Add new blog
app.post('/add-new-blog', (req, res) => {
    
})



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))