const Model = require('../model');
const { Commodity } = Model;
//Commodity commodity commodities
const commodityController = {
  all(req, res) {
    Commodity.find({})
      .populate('vendor')
      .exec((err, commodities) => res.json(commodities))
  },
  byId(req, res) {
    const idParams = req.params.id;

    Commodity
      .findOne({ _id: idParams })
      .populate('vendor')
      .exec((err, commodity) => res.json(commodity));
  },
  create(req, res) {
    const requestBody = req.body;
    const newCommodity = new Commodity(requestBody);

    newCommodity.save((err, saved) => {
      Commodity
        .findOne({ _id: newCommodity._id })
        .populate('vendor')
        .exec((err, commodity) => res.json(commodity))
    })
  },
  update(req, res) {
    const idParams = req.params.id;
    const commodity = req.body;

    console.log('idParams', idParams);
    console.log('commodity', commodity);

    Commodity.updateOne({ _id: idParams }, { ...commodity }, (err, updated) => {
      res.json(updated);
    })
  },
  remove(req, res) {
    const idParams = req.params.id;

    Commodity.findOne({ _id: idParams }).remove((err, removed) => res.json(idParams))
  }
}

module.exports = commodityController;
