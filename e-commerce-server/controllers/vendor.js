const Model = require('../model');
const { Vendor } = Model;
//Vendor vendor venders
const vendorController = {
  all(req, res) {
    Vendor.find({})
      .exec((err, vendors) => res.json(vendors))
  },
  byId(req, res) {
    const idParams = req.params.id;

    Vendor
      .findOne({ _id: idParams })
      .exec((err, vendor) => res.json(vendor));
  },
  create(req, res) {
    const requestBody = req.body;
    const newVendor = new Vendor(requestBody);

    newVendor.save((err, saved) => {
        Vendor
        .findOne({ _id: newVendor._id })
        .exec((err, vendor) => res.json(vendor))
    })
  },
  update(req, res) {
    const idParams = req.params.id;
    let vendor = req.body;

    Vendor.updateOne({ _id: idParams }, { ...vendor }, (err, updated) => {
      res.json(updated);
    })
  },
  remove(req, res) {
    const idParams = req.params.id;

    Vendor.findOne({ _id: idParams }).remove((err, removed) => res.json(idParams))
  }
}

module.exports = vendorController;
