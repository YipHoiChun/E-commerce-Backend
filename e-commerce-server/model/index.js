const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model.bind(mongoose);
const ObjectId = mongoose.Schema.Types.ObjectId;

const productSchema = Schema({
  id: ObjectId,
  name: String,
  image: String,
  price: Number,
  description: String,
  Vendor: { type: ObjectId, ref: 'Vendor' }
});

const vendorSchema = Schema({
  id: ObjectId,
  name: String,
});

const UserSchema = new mongoose.Schema({  
  id: ObjectId,
  name: String,
  email: String,
  password: String,
});

const Product = model('Product', productSchema);
const Vendor = model('Vendor', vendorSchema);
const User = model('User', UserSchema);

module.exports = { Product, Vendor, User };