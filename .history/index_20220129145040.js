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
MongoCient.connect(dbConnectionString, {
    useUnifiedTopology: true
})
.then(client => {

    const db = client.db('justblog');
    const dbCollection = db.collection('blogs');


    // Render the form that let's you add a new blog
    app.get('/add-blog', (req, res) => {
        res.render('add-blogs');
    })

    app.get('/api/blogs', (req, res) => {
        
    })

    // Add new blog to the database
    app.post('/add-new-blog', (req, res) => {

    })

})
.catch(err => console.log(err))














const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))