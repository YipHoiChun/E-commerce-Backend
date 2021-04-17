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
  manufacturer: { type: ObjectId, ref: 'Manufacturer' }
});

const manufacturerSchema = Schema({
  id: ObjectId,
  name: String,
});

// const UserSchema = new mongoose.Schema({  
//   id: ObjectId,
//   name: String,
//   email: String,
//   password: String,
// });
const Product = model('Product', productSchema);
const Manufacturer = model('Manufacturer', manufacturerSchema);
// const User = model('User', UserSchema);

// module.exports = { Product, Manufacturer, User };
module.exports = { Product, Manufacturer};
