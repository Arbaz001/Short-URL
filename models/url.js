const mongoose = require("mongoose");
//schema
const UrlSchema = new mongoose.Schema({
    ShortId:{
        type: String,
        required: true,
        unique: true,
    },
    redirectURL:{
        type: String,
        required: true,
    },
    visitHistory:[{ timestamp: { type:Number } }],
},
{ timestamps : true }
);

const URL = mongoose.model('url', UrlSchema);

//EXPORT
module.exports=URL;