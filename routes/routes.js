const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
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

    const {password , ...data} = await result.toJSON();

    res.send(data);
});

router.post('/login' , async (req , res ) => {
    const user = await User.findOne({
        email: req.body.email
    });

    if(!user){
        return res.status(404).send({
            "message" : "User not found!"
        });
    }

    const result = await bcrypt.compare(req.body.password , user.password);

    if(!result){
        return res.status(404).send({
            "message" : "Invalid crediential!"
        });
    }
    const token = jwt.sign({_id: user._id , name: user.name}, 'adham');

    res.cookie('jwt' , token , {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000
    });

    res.send({
        message: "User registered successfully"
    });

});

router.get('/user' , async (req , res) => {
    try {
        const cookie = req.cookies['jwt'];

        const claims = jwt.verify(cookie , 'adham');
          
        if (!claims) {
            return res.status(401).send({
            "message": "Unauthorized user"});
        }
    
        const user = await User.findOne({_id: claims._id});
        const {password , ...data} = await user.toJSON();
        res.send(data);  
    } catch (err) {
        return res.status(401).send({
        "message": "Unauthorized user"});
    }    
});

router.post('logout' , (req , res) => {
    res.cookie('jwt' , '' , {
        maxAge: 0
    });

    res.send({
        "message": "User logout successfully"
    });
});


module.exports = router;