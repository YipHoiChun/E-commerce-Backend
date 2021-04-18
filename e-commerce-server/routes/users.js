const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator/check');
const bcrypt = require('bcryptjs');
const UserModel = require('../model/user.js');

router.post('/', [
    check('name', 'name is required').not().isEmpty(),
    check('email', 'Please enter Valid Email').isEmail()
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty) {
        return res.status(400).json({ errors: errors.array() })
    }
    const { name, email, password } = req.body;
    try {
        //If the user already exists
        let user = await UserModel.findOne({ email });
        if (user) {
            return res.status(400).json({ msg: 'The email provided by the user already exists' });
        }
        //If there is a new user save
        user = new UserModel({
            name,
            email,
            password
        })
        //Password converted to hash format
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
