const mongoose = require('mongoose');

const schema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    asset_name: mongoose.Schema.Types.String,
}, {
    timestamps: true,
});

module.exports = mongoose.model('asset', schema);