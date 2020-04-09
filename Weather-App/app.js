var express     =   require("express");
var app         =   express();
var bodyParser  =   require("body-parser");
var request     =   require("request");


app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("home");
});

/*app.get("/home", function(req, res){
    var places=["Mumbai","New York","Paris","London","Tokyo"];
    var data =[];

    for(var j=0;j<4;j++)
    {
    var url = 'http://api.openweathermap.org/data/2.5/forecast?q=' + place + '&appid=8e92bda0f95b3b0228d1a57fcc94c9ea&units=metric';

    request(url,function(error,response,body){

    });
}
    res.render("home");
});
  */ 
 
  
app.get("/compare_form",function(req,res){
    res.render("compare_form")
})

app.get("/comparison",function(req,res){

    var city1 = 'mumbai', city2 = 'delhi';

    if(req.query.city1)
        city1=req.query.city1;

    if(req.query.city2)
        city2=req.query.city2;

    console.log(city1);
    console.log(city2);
   var url1  = 'http://api.openweathermap.org/data/2.5/weather?q=' + city1 + '&appid=48164502b664fb28643399e9f69d1016&units=metric';
   var url2  = 'http://api.openweathermap.org/data/2.5/weather?q=' + city2 + '&appid=48164502b664fb28643399e9f69d1016&units=metric';
   
   var flag1=0,flag2=0;

   var dcity1 = {};
   var dcity2 = {};
    
   request(url1,function(error,response,body){
       console.log("Error: "+error);
       console.log("SC: "+response.statusCode)
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
        //console.log("New date: " + date);
        utcString = date.toUTCString(); 
       // console.log("utc string: " + utcString);
        sunrise = utcString.slice(-11, -4);
        
        dateObj = new Date(sunset * 1000); 
        utcString = dateObj.toUTCString(); 
        sunset = utcString.slice(-11, -4);
        date = String(date);
        date = date.slice(0, 15);

        dcity1 = {
            place: city1,
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
        }
        flag1 = 1;
        
        console.log(flag1);
        console.log("Dcity1: ");
        console.log(dcity1);

        
    }
    else{
        console.log('Api1 failed');
    }
    

   });
  
   console.log(dcity1);

   request(url2, function(error,response,body){
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
        //console.log("New date: " + date);
        utcString = date.toUTCString(); 
       // console.log("utc string: " + utcString);
        sunrise = utcString.slice(-11, -4);
        
        dateObj = new Date(sunset * 1000); 
        utcString = dateObj.toUTCString(); 
        sunset = utcString.slice(-11, -4);
        date = String(date);
        date = date.slice(0, 15);

        dcity2 = {
            place: city2,
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
        }
        flag2 = 1;

        dcity = {
            dcity1: dcity1,
            dcity2: dcity2
        };
        
        res.render('comparison', dcity);

    }
    else console.log("API 2 failed")
    

   });
  
/*
   console.log(dcity1);
   console.log("Hi");
   console.log(dcity2);
   console.log(flag1,flag2);
   if(flag1 && flag2)
        res.render('comparison')
*/
 });

app.get("/about", function(req, res){
    res.render("about");
});

app.get("/cities", function(req, res){
    res.render("cities");
});

var place = 'mumbai';
var all_days=[], all_dates=[], all_times=[];
var date1, timezone, time;
var data;
var day1=[], day2=[], day3=[], day4=[], day5=[], day6=[];
var count_day1, count_day6;

app.get("/index", function(req, res){

    if(req.query.place)
        place = req.query.place;
    
    var url = 'http://api.openweathermap.org/data/2.5/forecast?q=' + place + '&appid=8e92bda0f95b3b0228d1a57fcc94c9ea&units=metric';
    request(url, function(error,response,body){
        
        if(!error && response.statusCode == 200){
            data = JSON.parse(body);     

            for(var i=0; i<data.list.length; i++)
            {
                date1 = data.list[i].dt;
                timezone = data.city.timezone;
                time = date1 + timezone;

                time = new Date(time * 1000);
                time = time.toUTCString();
                time = String(time);
                all_times[i] = time.slice(17, 25);
                all_days[i] = time.slice(0, 3);
                all_dates[i] = time.slice(5, 11);
            }

            count_day1 = 0;
            for(var i=0; i<all_days.length; i++){
                if(all_days[i] == all_days[0])
                    count_day1++;
            }
            count_day6 = 8 - count_day1;

            for(var i=0; i<40; i++){
                data.list[i].dt = all_dates[i];
                data.list[i].time = all_times[i];
                data.list[i].day = all_days[i];
                data.list[i].icon_url = 'http://openweathermap.org/img/wn/' + data.list[i].weather[0].icon + '@2x.png';
            }
            
            for(var i=0; i<count_day1; i++){
                day1[i] = data.list[i];
            }

            for(var i=0; i<8; i++){
                day2[i] = data.list[count_day1 + i];
                day3[i] = data.list[count_day1 + i + 8];
                day4[i] = data.list[count_day1 + i + 16];
                day5[i] = data.list[count_day1 + i + 24];
            }

            for(var i=0; i<count_day6; i++){
                day6[i] = data.list[32 + count_day1 + i];
            }

            obj = {
                place: place,
                day1: day1,
                day2: day2,
                day3: day3,
                day4: day4,
                day5: day5,
                day6: day6,
                count_day1: count_day1,
                count_day6: count_day6
            };
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
    var lon, lat, obj = {};
    
    request(url, function(error, response, body){
        if(!error && response.statusCode == 200){
            var data = JSON.parse(body);

            var pressure = data.main.pressure;
            var humidity = data.main.humidity;
            var wind_speed = data.wind.speed;
            var temp = data["main"]["temp"];
            var coord = data["coord"];
            var icon_url = 'http://openweathermap.org/img/wn/' + data["weather"][0]["icon"] + '@2x.png'; 
            var cond = data["weather"][0]["main"];
            var temp_feels = data.main.feels_like;
            var temp_min = data.main.temp_min;
            var temp_max = data.main.temp_max;
            var clouds = data.clouds.all;
            var sunrise = data.sys.sunrise + data.timezone;
            var sunset = data.sys.sunset + data.timezone;
            var wind_deg = data.wind.deg;
            var dt = data.dt + data.timezone;
            lon = data.coord.lon;
            lat = data.coord.lat;

            var uv_url = "http://api.openweathermap.org/data/2.5/uvi?appid=8e92bda0f95b3b0228d1a57fcc94c9ea&lat=" + lat + "&lon=" + lon;
            var uv_obj={};

            date = new Date(sunrise * 1000); 
            //console.log("New date: " + date);
            utcString = date.toUTCString(); 
           // console.log("utc string: " + utcString);
            sunrise = utcString.slice(-11, -4);
            dt = new Date(dt * 1000);
            dt = dt.toUTCString();
            dt = String(dt);       
            time = dt.slice(17, 25);

            dateObj = new Date(sunset * 1000); 
            utcString = dateObj.toUTCString(); 
            sunset = utcString.slice(-11, -4);
            date = String(date);
            date = date.slice(0, 15);

            obj = {
                place: place,
                icon_url: icon_url,
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
                date: date,
                time: time
            };
        }
        else{
            console.log("Error");
        }

        request(uv_url, function(error, response, body){
            if(!error && response.statusCode == 200){
                var uv_data = JSON.parse(body);
                var uv = uv_data.value;
                obj.uv = uv;

                res.render("day_weather", obj);
            }
            else {
                console.log("UV API error");
            }
        });
    }); 
});

app.get("/day_forecast/:day", function(req, res){

        var part_day = req.params.day;
        if(part_day === "day1"){
            res.render("day_forecast", {day: day1, place: place});
        }

        else if(part_day === "day2")
            res.render("day_forecast", {day: day2, place: place});
        
        else if(part_day === "day3")
            res.render("day_forecast", {day: day3, place: place});
        
        else if(part_day === "day4")
            res.render("day_forecast", {day: day4, place: place});

        else if(part_day === "day5")
            res.render("day_forecast", {day: day5, place: place});
        
        res.render("day_forecast", {day: day6, place: place});
});

app.get("/climate_map", function(req, res){
    res.render("climate_map");
});

app.get("/climate_map/pressure_map", function(req, res){
    res.render("pressure_map");
});

app.get("/climate_map/rain_map", function(req, res){
    res.render("rain_map");
});

app.get("/climate_map/temp_map", function(req, res){

    var url = "https://tile.openweathermap.org/map/temp_new/100/3/2.png?appid=48164502b664fb28643399e9f69d1016";
    request(url, function(error, response, body){
        console.log("Error: "+error);
        console.log("SC: "+response.statusCode);
        if(!error && response.statusCode == 200){
            obj = {
                body: body
            };
            console.log("Working");
            res.render("temp_map", obj);
        }
        else{
            console.log("Error");
        }
    });
});

app.get("/climate_map/wind_map", function(req, res){
    res.render("wind_map");
});

app.get("/climate_map/cloud_map", function(req, res){
    res.render("cloud_map");
});

app.get("/country_map", function(req, res){
    res.render("country_map");
});

app.get("*", function(req, res){
    res.send("Page not found");
});

app.listen(3000, function(){
    console.log("Server running on port 3000");
});