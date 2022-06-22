const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    title: {
        type: String,
        default: 'Nombre desconocido',
        trim: true,

    },

    description: {
        type: String,
        trim: true
    },

    price: {
        type: Number,
    },

    discountPercentage: {
        type: Number
        // / [0 - 99]{2}.[0-99] /
    },

    rating: {
        type: Number
    },

    stock: {
        type: Number

    },

    brand: {
        type: String
    },

    category: {
        type: String
    },

    thumbnail: {
        type: String
    },

    images: {
        type: [String],
        default: 'http://3.bp.blogspot.com/-jVZdbeWf5MQ/UJauqvHWV6I/AAAAAAAAF8k/cMlrixrZyFw/s1600/willyfog_tico.jpg'
    }

})


const Product = mongoose.model('product', productSchema)

module.exports = Product