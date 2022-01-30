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
const dbConnectionString = 'mongodb+srv://justcode:QMsH9aJPWtpJtepC@cluster0.bn7br.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';


// connecting to the db
app.get('/api/blogs', () => {
    res.send('server is running')
})














const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))