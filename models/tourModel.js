var mongoose = require('mongoose');


// creating a simple scheme
const tourScheme = new mongoose.Schema({
    name: {
        type: String,
        required: [true,
            "A tour must have a name"],
        unique: true
    },
    rating: {
        type: Number,
        default: 4.5
    },
    price: Number,
    createdAt: {
        type: Date,
        default: new Date(),
        select: false //if you don't want to get this field while calling form api due to security reason
    }
})

// modal of mongoose scheme
const Tour = mongoose.model('Tour', tourScheme);
module.exports = Tour