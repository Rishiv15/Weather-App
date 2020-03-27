var express     =   require("express");
var app         =   express();
var bodyParser  =   require("body-parser");
var request     =   require("request")


app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

console.log("hi")

app.get("/", function(req, res){
    request('http://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=48164502b664fb28643399e9f69d1016', function(error,response,body){
        if(!error && response.statusCode==200){
            console.log(body);
        }
        else{console.log("Error occured")}
    })
    res.render("home");
});
    

app.get("/about", function(req, res){
    res.render("about");
});

app.get("/cities", function(req, res){
    res.render("cities");
});

app.get("/climate_map", function(req, res){
    res.render("climate_map");
});

app.get("/cloud_map", function(req, res){
    res.render("cloud_map");
});

app.get("/country_map", function(req, res){
    res.render("country_map");
});

app.get("/day_weather", function(req, res){
    res.render("day_weather");
});

app.get("/index", function(req, res){
    /*var place = req.body.place;
    console.log(req.body);
    console.log(place);*/
    res.render("index");
});

app.get("/pressure_map", function(req, res){
    res.render("pressure_map");
});

app.get("/rain_map", function(req, res){
    res.render("rain_map");
});

app.get("/temp_map", function(req, res){
    res.render("temp_map");
});

app.get("/wind_map", function(req, res){
    res.render("wind_map");
});

app.get("*", function(req, res){
    res.send("Page not found");
});

app.listen(3000, function(){
    console.log("Server running on port 3000");
});