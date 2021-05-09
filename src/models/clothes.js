'use strict';
const mongoose = require('mongoose');

const clothesSchema = new mongoose.Schema({
  name: { type: String, required:true },
  catugary: { type: String,required:false},
  
});
const clothesModel = mongoose.model('clothes', clothesSchema);

module.exports = clothesModel;