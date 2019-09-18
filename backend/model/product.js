const mongoose = require('mongoose');

const productchema = mongoose.Schema({
    name: String,
    type: String,
    price: Number,
    rating: Number,
    warranty_years : Number,
    available : Boolean
  });

// Création productchema //
const dataModel = mongoose.model('products', productchema);



module.exports = dataModel;
