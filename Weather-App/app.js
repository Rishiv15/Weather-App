var express     =   require("express");
var app         =   express();
var bodyParser  =   require("body-parser");
var request     =   require("request")


app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("home");
});

app.get("/home", function(req, res){
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

var place = 'mumbai'; 

app.get("/index", function(req, res){
    if(req.query.place){
        place = req.query.place;
    }
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + place + '&appid=48164502b664fb28643399e9f69d1016&units=metric';
    request(url, function(error,response,body){
        
        if(!error && response.statusCode == 200){
            var data = JSON.parse(body);
            var temp = data["main"]["temp"];
            var coord = data["coord"];
            var icon = data["weather"][0]["icon"];
            var pressure = data.main.pressure;
            var humidity = data.main.humidity;
            var wind_speed = data.wind.speed;
            var sunrise = data.sys.sunrise + data.timezone;

            date = new Date(sunrise * 1000); 
            utcString = date.toUTCString(); 
            sunrise = utcString.slice(-11, -4);
            
            date = String(date);
            date = date.slice(4, 10);

            obj = {
                place: place,
                icon: icon,
                coord: coord,
                temp: temp,
                pressure: pressure,
                humidity: humidity,
                wind_speed: wind_speed,
                date: date,

            };
            console.log(obj);
            res.render("index", obj);
        }
        else{
            console.log("Error");
        }
    });
});

app.get("/day_weather", function(req, res){

    if(req.query.place){
        place = req.query.place;
    }
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + place + '&appid=48164502b664fb28643399e9f69d1016&units=metric';

    request(url, function(error, response, body){
        if(!error && response.statusCode == 200){
            var data = JSON.parse(body);

            var pressure = data.main.pressure;
            var humidity = data.main.humidity;
            var wind_speed = data.wind.speed;
            var temp = data["main"]["temp"];
            var coord = data["coord"];
            var icon = data["weather"][0]["icon"];
            var cond = data["weather"][0]["main"];
            var temp_feels = data.main.feels_like;
            var temp_min = data.main.temp_min;
            var temp_max = data.main.temp_max;
            var clouds = data.clouds.all;
            var sunrise = data.sys.sunrise + data.timezone;
            var sunset = data.sys.sunset + data.timezone;
            var wind_deg = data.wind.deg;

            date = new Date(sunrise * 1000); 
            utcString = date.toUTCString(); 
            sunrise = utcString.slice(-11, -4);
            
            dateObj = new Date(sunset * 1000); 
            utcString = dateObj.toUTCString(); 
            sunset = utcString.slice(-11, -4);
            date = String(date);
            date = date.slice(0, 15);

            var obj = {
                place: place,
                icon: icon,
                cond: cond,
                temp: temp,
                temp_max: temp_max,
                temp_min: temp_min,
                temp_feels: temp_feels,
                pressure: pressure,
                humidity: humidity,
                wind_speed: wind_speed,
                clouds: clouds,
                sunrise: sunrise,
                sunset: sunset,
                wind_deg: wind_deg,
                coord: coord,
                date: date
            };
            res.render("day_weather", obj);
        }
        else{
            console.log("Error");
        }
    }); 
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