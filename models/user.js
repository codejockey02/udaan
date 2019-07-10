const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name: mongoose.Schema.Types.String,
    user_name: mongoose.Schema.Types.String,
    password: mongoose.Schema.Types.String,
    worker_id: mongoose.Schema.Types.String,
    token: mongoose.Schema.Types.String,
}, {
    timestamps: true,
});

module.exports = mongoose.model('user', schema);