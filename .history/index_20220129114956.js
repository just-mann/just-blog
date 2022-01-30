const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express();

// BodyParser to tidy up the input from the form
app.use(bodyParser.urlencoded({ extended: trut }));

// Setting the view engine
app.set('view engine', 'ejs');




// Get all the blogs from the database
app.get('/api/blogs', cors(), (req, res) => {
    res.send('Server is running.');
})

// Render the form that let's you add a new blog
app.get('/add-blog', (req, res) => {
    res.render('addBlog');
})


// Add new blog to the database
app.post('/add-new-blog', (req, res) => {

})







const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))