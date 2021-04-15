const Model = require('../model');
const { Company } = Model;
//company
const companyController = {
  all(req, res) {
      Company.find({})
      .exec((err, companys) => res.json(companys))
  },
  byId(req, res) {
    const idParams = req.params.id;
    Company
      .findOne({ _id: idParams })
      .exec((err, company) => res.json(company));
  },
  create(req, res) {
    const requestBody = req.body;
    const newCompany = new Company(requestBody);

    newCompany.save((err, saved) => {
        Company
        .findOne({ _id: newCompany._id })
        .exec((err, company) => res.json(company))
    })
  },
  update(req, res) {
    const idParams = req.params.id;
    let company = req.body;

    Company.updateOne({ _id: idParams }, { ...company }, (err, updated) => {
      res.json(updated);
    })
  },
  remove(req, res) {
    const idParams = req.params.id;

    Company.findOne({ _id: idParams }).remove( (err, removed) => res.json(idParams) )
  }
}

module.exports = companyController;