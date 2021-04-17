const express = require('express');
const router = express.Router();
const config = require('config');
const jwt = require ('jsonwebtoken');
const {check, validationResult} = require('express-validator/check');
const UserModel = require('../model/UserModel');
const bcrypt = require('bcryptjs');
const auth = require('../middlewares/auth');

router.get('/', auth, async (req, res)   => {
   try {
       const user = await (await UserModel.findById(req.user.id)).Selected('-password');
       res.json(user);
   } catch (err) {
       console.log(err.message);
       res.status(500).send('error');
   }
});

router.post('/', [
    check('email', 'Please enter a valid email').isEmail(),
    check('password', 'Please enter the password').exists()
],
   async (req, res) => {
    const errors = validationResult(req);
   if( !errors.isEmpty){
       return res.status(400).json({errors: errors.array()})
   }
   const {email, password}  = req.body;
   try {

       let user = await UserModel.findOne({email});
       if(!user){
           return res.status(400).json({msg: 'The user whose email provided was not found'});
       } 

       const checkpassword = await bcrypt.compare(password, user.password);
       if (!checkpassword) {
           return res.status(400).json({ msg: 'Wrong password'});
       }
       const payload = {
        user: {
            id: user.id
        }
    };

   } catch (error) {
       console.log(error.message);
       res.status(500).send('server error');
   }    
   res.send('login successful');
});
module.exports = router;
