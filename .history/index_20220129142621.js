const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const MongoCient = require('mongodb').MongoClient;


const app = express();

// BodyParser to tidy up the input from the form
app.use(bodyParser.urlencoded({ extended: true }));

// Static 
app.use(express.static('public'))


// Setting the view engine
app.set('view engine', 'ejs');


// Connection string
const dbConnectionString = 'mongodb+srv://justcode:<password>@cluster0.bn7br.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';



    // connecting to the db
    MongoClient.connect(dbConnectionString, { useUnifiedTopology: true})
        .then(client => {
            // Get all the blogs from the database
            app.get('/api/blogs', cors(), (req, res) => {
                res.send('Server is running.');
            }
        })
        .catch(err => console.log(err));
        

// Render the form that let's you add a new blog
app.get('/add-blog', (req, res) => {
    res.render('add-blog');
})


// Add new blog to the database
app.post('/add-new-blog', (req, res) => {

})







const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))