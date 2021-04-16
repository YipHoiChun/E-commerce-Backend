const Model = require('../model');
const { User } = Model;

const userController = {
    all(req, res) {
        User.find({})
        .exec((err, users) => res.json(users))
    },
    byId(req, res) {
      const idParams = req.params.id;
  
      User
        .findOne({ _id: idParams })
        .exec((err, user) => res.json(user));
    },
    create(req, res) {
      const requestBody = req.body;
      const newUser = new User(requestBody);
  
      newUser.save((err, saved) => {
        User
          .findOne({ _id: newUser._id })
          .exec((err, user) => res.json(user))
      })
    },
    update(req, res) {
      const idParams = req.params.id;
      let user = req.body;
  
      User.updateOne({ _id: idParams }, { ...user }, (err, updated) => {
        res.json(updated);
      })
    },
    remove(req, res) {
      const idParams = req.params.id;
  
      User.findOne({ _id: idParams }).remove( (err, removed) => res.json(idParams) )
    }
  }
  
  module.exports = userController;