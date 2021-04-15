const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model.bind(mongoose);
const ObjectId = mongoose.Schema.Types.ObjectId;

const merchandiseSchema = Schema({
  id: ObjectId,
  name: String,
  image: String,
  price: Number,
  description: String,
  company: { type: ObjectId, ref: 'Company' }
});

const companySchema = Schema({
  id: ObjectId,
  name: String,
});



const UserSchema = new mongoose.Schema({  
  id: ObjectId,
  name: String,
  email: String,
  password: String,
});

const Merchandise = model('Merchandise', merchandiseSchema);
const Company = model('Company', companySchema);
const User = model('User', UserSchema);
module.exports = { Merchandise, Company , User };
