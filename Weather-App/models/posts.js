var mongoose = require("mongoose");


var postSchema = mongoose.Schema({
    title: String,
    place: String,
    time : String,
    description: String,
    created: {type:Date,default:Date.now}
})





module.exports = mongoose.model("Post",postSchema);