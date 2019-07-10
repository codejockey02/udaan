const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const random = require('randomstring');
const port = process.env.PORT || 3000;
app.use(bodyParser.json({
    limit: '25mb',
}));
bodyParser.urlencoded({
    extended: true,
    limit: '25mb'
});

const router = new express.Router();

app.post('/signup', async (req, res) => {
    const {
        username,
        password,
    } = req.body;
    const token = random.generate();
    res.json({
        token,
    });
});

app.listen(port);
console.log("connected");