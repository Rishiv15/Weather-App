var a = document.getElementsByClassName("num");
var b = document.getElementsByClassName("degree");
var c = document.getElementsByTagName("small");

for(var i=0; i<a.length; i++)
{
    a[i].addEventListener("click", function(){
        this.style.color = "#009ad8";
    });
}
for(var i=0; i<b.length; i++)
{
    b[i].addEventListener("click", function(){
        this.style.color = "#009ad8";
    });
    b[i].addEventListener("mouseover", function(){
        this.style.color = "#009ad8";
    });
    b[i].addEventListener("mouseout", function(){
        this.style.color = "whitesmoke";
    });
}
for(var i=0; i<c.length; i++)
{
    c[i].addEventListener("click", function(){
        this.style.color = "#009ad8";
    });
    c[i].addEventListener("mouseover", function(){
        this.style.color = "#009ad8";
    });
    c[i].addEventListener("mouseout", function(){
        this.style.color = "whitesmoke";
    });
}

/*function main() {
  const canvas = document.querySelector("#glCanvas");
  // Initialize the GL context
  const gl = canvas.getContext("webgl");

  // Only continue if WebGL is available and working
  if (gl === null) {
    alert("Unable to initialize WebGL. Your browser or machine may not support it.");
    return;
  }

  // Set clear color to black, fully opaque
  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  // Clear the color buffer with specified clear color
  gl.clear(gl.COLOR_BUFFER_BIT);
}
window.onload = main;*/

function search_bar()
{
    $(".btnn").click(function(){
        console.log($("input").val());
    });

    $("input[type='search']").keypress(function(event){
        if(event.which === 13)
            console.log($("input").val());
    });
}
search_bar();

function fadeIn()
{
    $("img.m-0").fadeIn(2500);
    $("img").fadeIn(1800);
    $("li").fadeIn(500);
}
fadeIn();

/*$(".forecast").hover
(
    function()
    {
        $(this).html
        (
            <div class="today forecast">
                <div class="forecast-header">
                    <div class="day">Monday</div>
                    <div class="date">6 Oct</div>
                </div> 
                <div class="forecast-content">
                    <div class="location"><a href="cities.html">Mumbai</a></div>
                    <a href="day_weather.html">
                        <div class="degree">
                            <div class="num">23<sup>o</sup>C</div>	
                            <div class="forecast-icon">
                                <h2 style="font-size: 60px;"><i class="far fa-sun"></i></h2>
                            </div>
                        </div>
                    </a>
                    <span><i class="fas fa-umbrella mr-2"></i>20%</span>
                    <span><i class="fas fa-wind mr-2"></i>18km/h</span>
                    <span><i class="fas fa-compass mr-2"></i>East</span>
                </div>
            </div>
        );
    },
    function()
    {
        $(this).html
        (
            <div class="forecast">
                <div class="forecast-header">
                    <div class="day">Tuesday</div>
                </div>
                <h2><i class="fas fa-cloud"></i></h2> 
                <div class="forecast-content">
                    <div class="degree">23<sup>o</sup>C</div>
                    <small>18<sup>o</sup></small>
                </div>
            </div>
        );
    }
);*/

/*$(".forecast").mouseenter(function(){
    $(this).append(
    ' <div class="row">
           <div class="col-6 pl-5">
                <div class="pt-3">
                    <h2 style="font-size: 30px;"><i class="far fa-sun"></i></h2>            
                </div>
            </div>
            <div class="col-6 pt-3 pr-5">
                <div class="numCity">23<sup>o</sup>C</div>
            </div>                       
        </div>  
         <div class="row">
            <div class="col-6 pl-5">
                <div class="pt-3">	
                    <h2 style="font-size: 30px;"><i class="fas fa-wind"></i></h2>             
                </div>
            </div>
            <div class="col-6 pt-3 pr-5">
                <div class="numCity">18km/h</div>
            </div>                       
         </div> '
    );
});*/



