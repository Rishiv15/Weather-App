var mongoose = require("mongoose");
var tourism  = require("./models/tourism");

var data = [
    {
        place: "Mumbai",
        temp: 27.2,
        humidity: 75,
        landform: "Island",
        image: "https://media-cdn.tripadvisor.com/media/photo-s/0e/16/23/3a/view-of-gateway-of-india.jpg",
        rain: 95.35,
        season: "Monsoon"
    },
    {
        place: "Delhi",
        temp: 34,
        humidity: 43,
        landform: "Smooth",
        image: "https://static.toiimg.com/photo/65666850/redfort1.jpg?width=748&resize=4",
        rain: 85,
        season: "Winter"
    },
    {
        
        place: "Paris",
        temp: 19,
        humidity: 75,
        landform: "Hilly",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTYD0VaUZW3HhbdEYWmzHyACxa_AKLnzCA7_HDS5R0WFvOeSqUH&usqp=CAU",
        rain: 67,
        season: "Winter"
    },
    {  
        place: "London",
        temp: 13,
        humidity: 60,
        landform: "Hilly",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTYD0VaUZW3HhbdEYWmzHyACxa_AKLnzCA7_HDS5R0WFvOeSqUH&usqp=CAU",
        rain: 87,
        season: "Winter"
    }
];

function seedDB(){
    tourism.deleteMany({}, function(err){
        if(err){
            console.log(err);
        }
        data.forEach(function(seed){
            tourism.create(seed, function(err,data){
                if(err){
                    console.log(err);
                }
            });
        });
    });
}

module.exports = seedDB;