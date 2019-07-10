const mongoose = require('mongoose');

const schema = mongoose.Schema({
    asset_id: mongoose.Schema.Types.String,
    task_id: mongoose.Schema.Types.String,
    worker_id: mongoose.Schema.Types.String,
    time_of_allocation: mongoose.Schema.Types.String,
    task_to_be_performed_by: mongoose.Schema.Types.String,
}, {
    timestamps: true,
});

module.exports = mongoose.model('assign', schema);