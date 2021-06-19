const router = require('express').Router();
const Apply= require ('./applySchema');


router.post('/employee',async(req,res)=>{
    try {
        var emailExist = await User.findOne({email:req.body.email});
        if(emailExist){
            return res.status(400).json("Email already exist");
        }

        const apply = new Apply({
            fname:req.body.fname,
            lname:req.body.lname,
            fathername:req.body.fathername,
            mothername:req.body.mothername,
            email:req.body.email,
            phone:req.body.phone,
            address:req.body.address,
            qualification:req.body.qualification,
            experience:req.body.experience,
            marital:req.body.marital,
        });
        var data = await apply.save();
       res.json(data);
    } catch(err){
            res.status(400).json(err);
    }
   // res.json(user);
});






module.exports= router;