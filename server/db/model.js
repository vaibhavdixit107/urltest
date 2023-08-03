const mongoose = require('mongoose')
const shortid = require('shortid');

// function getRandomArbitrary(min, max) {
//     return Math.random() * (max - min) + min;
//   }

// function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
//   }

const UrlSchema = new mongoose.Schema({
    fullUrl: {
        type: String,
        required: true,
        unique: true  // prevent duplicates
    },
    shortUrl: {
        type: String,
        required: true,
        // default: getRandomInt(0,100)
        default: shortid.generate
    }
    });    
const Url = mongoose.model('Url', UrlSchema);

module.exports = Url;