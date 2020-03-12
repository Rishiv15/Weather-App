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
}
for(var i=0; i<c.length; i++)
{
    c[i].addEventListener("click", function(){
        this.style.color = "#009ad8";
    });
}