const mongoose = require('mongoose');

const schema = mongoose.Schema({
    _id: {
        type: 'string'
    },
    asset_name: mongoose.Schema.Types.String,
}, {
    timestamps: true
});

module.exports = mongoose.model('asset', schema);