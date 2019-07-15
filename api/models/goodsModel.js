'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var TaskSchema = new Schema({
  name: {
    type: String,
    required: 'This field is required'
  },
  price: {
    type: Number,
    required: 'This field is required'
  },
  brand: {
    type: String,
    required: 'This field is required'
  },
  img: { 
      data: Buffer, 
      contentType: String 
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  type: {
    type: [{
      type: String,
      enum: ['shoes', 'hats', 'sweaters', 'pants', 'clothing']
    }],
    default: ['clothing']
  }
});

module.exports = mongoose.model('Clothes', TaskSchema);
