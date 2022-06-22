const express = require('express');
const mongoose = require('mongoose');
const http = require('http');
const cors = require('cors');
const events = require('./routes/eventRouter');
require('dotenv').config();

const app = express();
const server = http.createServer(app);
mongoose.set('debug', true);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const uri = process.env.MONGO_URI;
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: true,
};

mongoose.connect(uri, options);
mongoose.connection.once('open', function () {
    console.log("MongoDB database connection established successfully");
});


app.use('/events', events);
app.get('/', function (req, res) {
    res.status(200).send(
        {
            "msg": "hello_world"
        }
    )
})

async function setup_and_launch_server(app) {

    // catch 404 and forward to error handler
    app.use((req, res) => {
        res.status(404).send();
    });

    server.listen(process.env.PORT || 3000, function () {
        console.log('Listening');
    });
}

setup_and_launch_server(app).then(r => console.log('Server launched'));