const mongoose = require('mongoose');

const movieSchema = mongoose.Schema({

    title: {
        type: String,
        required: true
    },

    year: {
        type: Number
    },

    posterUrl: {
        type: String
    },

    ratings: {
        type: Number
    },

    favourite: {
        type: Boolean,
        default: false
    },

    watched: {
        type: Boolean,
        default: false
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }

}, {
    timestamps: true
});

module.exports = mongoose.model('Movie', movieSchema);