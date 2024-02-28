const mongoose = require("mongoose");
const  mongooseDelete  = require("mongoose-delete");

const ContactScheme = new mongoose.Schema(
    {
        name:{
            type:String
        },
        email:{
            type:String
        },
        telefono:{
          type:String  
        }, 
        module:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'modules'
        }
    },
    {
        timestamps:true, //TODO CreatedAT, updateAT
        versionKey:false
    }
);

ContactScheme.plugin(mongooseDelete, { overrideMethods: "all" });
module.exports = mongoose.model("contacts",ContactScheme)