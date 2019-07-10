const express = require('express');
const random = require('random');
const genTok = require('randomstring');

const register = require('./utils/registerUser');

const userModel = require('../models/user');

const router = new express.Router();

router.post('/addworker', async (req, res) => {
    const {
        name,
        username,
        password,
    } = req.body;
    const worker_id = random.int(min = 1000, max = 10000);
    register.register(name, username, password, worker_id)
        .then(result => res.json({
            message: result.message
        }))
        .catch(() => res.json({
            message: 'Unexpected error occured'
        }));
});

router.post('/login', async (req, res) => {
    const {
        username,
        password,
    } = req.body;
    let user;
    try {
        user = await userModel.findOne({
            user_name: username
        }, {
            password: 1,
        });
    } catch (err) {
        return res.json({
            message: 'Error making database call',
        });
    }
    if (user == null) {
        return res.json({
            message: 'Worker does not exist',
        });
    }
    if (user.password.toString() !== password.toString()) {
        return res.json({
            message: 'Incorrect username/password',
        });
    }
    const token = genTok.generate();
    await userModel.updateOne({
        user_name: username,
    }, {
        $set: {
            token,
        }
    });
    return res.json({
        message: token,
    });
});

module.exports = router;