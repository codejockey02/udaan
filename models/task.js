const mongoose = require('mongoose');

const schema = mongoose.Schema({
    task_name: mongoose.Schema.Types.String,
}, {
    timestamps: true,
});

module.exports = mongoose.model('task', schema);