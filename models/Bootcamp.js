const mongoose = require('mongoose');

const BootcampSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [false, 'Please add a name'],
        unique: false,
        trim: true,
        maxlength: [50, 'Name can not be more than 50 characters']
    },
    slug: String,
    description: {
        type: String,
        required: [false, 'Please add a name'],
        unique: false,
        maxlength: [50, 'Name can not be more than 50 characters']
    },
    website: {
        type: String,
      
     
    },

    phone: {
        type: String,
        maxlength: [20, 'Phone number can not be longer than 20 characters']
    },
    email: {
        type: String,
      
    },
    Address: {
        type: String,
        required: [false, 'Please add an address']
    },
    location: {
        type: {
            type: String,
            enum: ['Point'],
            required: false
        },
        coordinates: {
            type: [Number],
            required: false,
            index: '2dsphere'
        },
        formattedAddress: String,
        street: String,
        city: String,
        state: String,
        zipcode: String,
        country: String
    },
    carrers: {
        type: [String],
        required: false,
        enum: [
            'Web Development',
            'Mobile Development',
            'UI/UX',
            'Data Science',
            'Business',
            'Other'
        ]
    },
    averageRating:{
        type: Number,
        min: [1, 'Rating must be at least 1'],
        max: [10, 'Rating must can not be more than 10']
    }
    //averageCost: Number,

});

module.exports = mongoose.model('Bootcamp',BootcampSchema);