const router = require('express').Router();
const bcrypt = require('bcryptjs');
const User = require('../models/user');

router.post('/register' , async (req , res ) => {
    const salt = await bcrypt.genSalt(10)
    const encryptedPassword = await bcrypt.hash(req.body.password,salt);

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: encryptedPassword
    });

    const result = await user.save();

    res.send(result);

});


module.exports = router;