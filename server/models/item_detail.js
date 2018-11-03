const mongoose = require('mongoose');
const Schema = mongoose.Schema;

exports.ItemDetail = mongoose.model(
  'item_detail',
  new Schema({
    _id: Schema.Types.ObjectId,
    item_id: String,
    timestamp: String,
    title: String,
    type: [String],
    head_picture: String,
    all_picture: [String],
    collect_Number: String,
    privilege: String,
    origin_price: String,
    tmall_price: String,
    tmall_price_reason: String,
    sale_Number: String,
    review_Number: String,
    tmall_point: String,
    promise: [String],
    attribute: [String],
    seller_rate: [[String]],
    seller_name: [String],
    seller_age: [String],
    seller_location: [String],
    seller_url: [String],
    class: {
      color: [[String]],
      reference: [[String]]
    }
  }),
  'item_detail'
);
