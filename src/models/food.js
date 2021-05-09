'use strict';
const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
  name: { type: String, required:true },
  catugary: { type: String, required:false },
});
const foodModel = mongoose.model('food', foodSchema);

module.exports = foodModel;