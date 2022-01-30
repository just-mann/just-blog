const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;


const app = express();

// BodyParser to tidy up the input from the form
app.use(bodyParser.urlencoded({ extended: true }));

// Static 
app.use(express.static('public'))


// Setting the view engine
app.set('view engine', 'ejs');


// Connection string
const dbConnectionString = 'mongodb+srv://justcode:A1kula22@cluster0.bn7br.mongodb.net/justBlog?retryWrites=true&w=majority';

MongoClient.connect(dbConnectionString, {
    useUnifiedTopology: true
}, (err, client) => {
    if (err) return console.log(err);
    console.log('Connection made to database...');
})















const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))