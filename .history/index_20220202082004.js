const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
require('dotenv/config');

const app = express();

// BodyParser to tidy up the input from the form
app.use(bodyParser.urlencoded({ extended: true }));

// Static 
app.use(express.static('public'))


// Setting the view engine
app.set('view engine', 'ejs');



MongoClient.connect(process.env.DB_CONNECTION, {useUnifiedTopology: true})
    .then(client => {
        console.log('Connected to database...')

        const database = client.db('justBlog');
        const dbCollection = database.collection('blogs');

        
        // displaying the blogs
        app.get('/api/blogs', cors(), (req, res) => {
            dbCollection.find().toArray()
            .then(result => {
                    res.setHeader('Content-Type', 'application/json');
                    res.send(result)
                    console.log(result)
                })
                .catch(err => console.log(err))
        })

        // display form to add new blog
        app.get('/add-blog', (req, res) => {
            res.render('add-blog');
        })

        // use the post method to add a new blog
        app.post('/add-new-blog', (req, res) => {
            dbCollection.insertOne(req.body)
                .then(result => {
                    console.log(result)
                    res.redirect('/add-blog');
                })
                .catch(error => console.log(error))
        })

        const PORT = process.env.PORT || 5000;
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`)
        })
    })
    .catch(err => console.log(err))















