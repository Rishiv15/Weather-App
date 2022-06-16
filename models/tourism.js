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

/* tourism.create(
    {
        place: "Mumbai",
        temp: 27.2,
        humidity: 75,
        landform: "Island",
        image: "https://media-cdn.tripadvisor.com/media/photo-s/0e/16/23/3a/view-of-gateway-of-india.jpg",
        rain: 95.35,
        season: "Monsoon"
    }, function(err, place){
        if(err){
            console.log("Error creating place");
        }
});

tourism.create(
    {
        place: "Delhi",
        temp: 34,
        humidity: 43,
        landform: "Smooth",
        image: "https://static.toiimg.com/photo/65666850/redfort1.jpg?width=748&resize=4",
        rain: 85,
        season: "Winter"
    }, function(err, place){
        if(err){
            console.log("Error creating place");
        }
}); */


module.exports = tourism;
