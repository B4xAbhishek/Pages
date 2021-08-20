const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const signSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },

}, {
    timestamps: true
});

const Sign = mongoose.model('Sign', signSchema);

module.exports = Sign;