const mongoose = require('mongoose');

const ApplySchema = mongoose.Schema({
    fname : {
        type: String,
        required:true,
        lowercase:true,
    },
    lname : {
        type: String,
        required:true,
        lowercase:true,
    },
    fathername : {
        type: String,
        required:true,
        lowercase:true,
    },
    mothername : {
        type: String,
        required:true,
        lowercase:true,
    },
    email : {
        type:String,
        required:true,
    },
    phone : {
        type: String,
        required:true,
        lowercase:true,
    },
    address : {
        type: String,
        required:true,
        lowercase:true,
    },
    qualification : {
        type: String,
        required:true,
        lowercase:true,
    },
    experience : {
        type: String,
        required:true,
        lowercase:true,
    },
    marital : {
        type: String,
        required:true,
        lowercase:true,
    },
})

module.exports = mongoose.model('Apply',ApplySchema);