const mongoose = require('mongoose');
const Schema = mongoose.Schema;

exports.JuDetail = mongoose.model(
  'ju_detail',
  new Schema({
    _id: Schema.Types.ObjectId,
    item_id: String,
    ju_id: String,
    timestamp: String,
    title: String,
    type: [String],
    head_picture: String,
    privilege: [String],
    description: [String],
    ju_price: String,
    sale: String,
    seller_name: String,
    seller_url: String,
    seller_rate: [[String]],
    seller_promise: [String]
  }),
  'ju_detail'
);
