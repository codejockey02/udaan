const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const env = require('./env');

env();
const app = express();

const UserController = require('./controllers/user');
const functionalityController = require('./controllers/functions');
const assignController = require('./controllers/assign');

app.use(bodyParser.json({
    limit: '25mb'
}));
app.use(bodyParser.urlencoded({
    extended: true,
    limit: '25mb'
}));

app.use('/', UserController, functionalityController, assignController);

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true
}).then(() => {
    process.stdout.write('Connected to mongodb');
}).catch((err) => {
    process.stderr.write(err.stack.toString());
});

app.listen(process.env.PORT);