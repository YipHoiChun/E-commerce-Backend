const Model = require('../model');
const { Merchandise } = Model;

const merchandiseController = {
  all(req, res) {
    Merchandise.find({})
      .populate('company')
      .exec((err, merchandises) => res.json(merchandises))
  },
  byId(req, res) {
    const idParams = req.params.id;

    Merchandise
      .findOne({ _id: idParams })
      .populate('company')
      .exec((err, merchandise) => res.json(merchandise));
  },
  create(req, res) {
    const requestBody = req.body;
    const newMerchandise = new Merchandise(requestBody);

    newMerchandise.save((err, saved) => {
        Merchandise
        .findOne({ _id: newMerchandise._id })
        .populate('company')
        .exec((err, merchandise) => res.json(merchandise))
    })
  },
  update(req, res) {
    const idParams = req.params.id;
    const merchandise = req.body;

    console.log('idParams', idParams);
    console.log('merchandise', merchandise);

    Merchandise.updateOne({ _id: idParams }, { ...merchandise }, (err, updated) => {
      res.json(updated);
    })
  },
  remove(req, res) {
    const idParams = req.params.id;

    Merchandise.findOne({ _id: idParams }).remove( (err, removed) => res.json(idParams) )
  }
}

module.exports = merchandiseController;