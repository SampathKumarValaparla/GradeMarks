const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true,
    },
    desc:{
        type:String,
        require:true,
    },
    location:{
        type:String,
        require:true,
    }
},{timestamps:true})

const postModel = mongoose.model("User", postSchema);
module.exports = postModel;