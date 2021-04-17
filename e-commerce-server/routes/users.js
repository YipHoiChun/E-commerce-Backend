// var express = require('express');
// var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// module.exports = router;
const express = require('express');
const router = express.Router();
const jwt = require ('jsonwebtoken');
const {check, validationResult} = require('express-validator/check');
const bcrypt = require('bcryptjs');
const UserModel =  require('../model/UserModel.js');

router.post('/',  [
    check('name', 'name is required').not().isEmpty(),
    check('email', 'Please enter Valid Email').isEmail(),
    check('password', 'Please Enter Password with Min 6 or More characters').isLength({
        min: 6})

],  async (req, res) => {
   const errors = validationResult(req);
   if( !errors.isEmpty){
       return res.status(400).json({errors: errors.array()})
   }  
  const {name, email, password} = req.body;
  try {
      /** if user already exists  */
      let user = await UserModel.findOne({email});
      if(user){
          return res.status(400).json({msg: 'The email provided by the user already exists'});
      }
      /** if new user the save it  */
      user = new UserModel({
          name, 
          email,
          password
      })
      /** password converting into Hash format */
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
      await user.save();
      const payload = {
          user: {
              id: user.id
          }
      };
    } catch (error) {
    }
    res.send('Registration successful');
});
    
module.exports = router;
