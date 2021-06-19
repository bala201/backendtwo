const router = require('express').Router();
const User= require ('./userSchema');
const bcrypt= require('bcryptjs');
const jwt = require('jsonwebtoken')

router.post('/register',async(req,res)=>{
    try {
        var emailExist = await User.findOne({email:req.body.email});
        if(emailExist){
            return res.status(400).json("Email already exist");
        }

        //password hash
        var hash = await bcrypt.hash(req.body.password,10);
        const user = new User({
            fname:req.body.fname,
            lname:req.body.lname,
            email:req.body.email,
            password:hash,
        });
        var data = await user.save();
       res.json(data);
    } catch(err){
            res.status(400).json(err);
    }
   // res.json(user);
});

router.post('/login',async(req,res)=>{
    try{
        var userData = await User.findOne({email:req.body.email});
        if(!userData){
            return res.status(400).json("Email not exist");
        }
        var validPsw = await bcrypt.compare(req.body.password, userData.password);
        if(!validPsw){
            return res.status(400).json("Password not valid");
        }

        var userToken = jwt.sign({email:userData.email},'periyaRagasiyam');
        res.header('auth',userToken).json(userToken);
    }
    catch(err){

        res.status(400).json(err);
    }
});




module.exports= router;