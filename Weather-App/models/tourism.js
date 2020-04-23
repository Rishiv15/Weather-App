var mongoose = require("mongoose");

var tourSchema = new mongoose.Schema({
    place: String,
    image: String,
    temp: Number,
    humidity: Number,
    landform: String,
    rain: Number,
    distance: Number
});

module.exports = mongoose.model("tourism", tourSchema);
