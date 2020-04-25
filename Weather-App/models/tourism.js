var mongoose = require("mongoose");

var tourSchema = new mongoose.Schema({
    place: String,
    image: String,
    temp: Number,
    humidity: Number,
    landform: String,
    rain: Number,
    season: String
});

var tourism = mongoose.model("tourism", tourSchema);

// tourism.create(
//     {
//         place: "Mumbai",
//         temp: 27.2,
//         humidity: 75,
//         landform: "Island",
//         image: "https://media-cdn.tripadvisor.com/media/photo-s/0e/16/23/3a/view-of-gateway-of-india.jpg",
//         rain: 95.35
//     }, function(err, place){
//         if(err){
//             console.log("Error creating place");
//         }
// });

module.exports = tourism;
