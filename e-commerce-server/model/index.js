const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model.bind(mongoose);
const ObjectId = mongoose.Schema.Types.ObjectId;

const commoditySchema = Schema({
  id: ObjectId,
  name: String,
  image: String,
  price: Number,
  description: String,
  vendor: { type: ObjectId, ref: 'Vendor' }
});

const vendorSchema = Schema({
  id: ObjectId,
  name: String,
});


const Commodity = model('Commodity', commoditySchema);
const Vendor = model('Vendor', vendorSchema);

module.exports = { Commodity, Vendor};
