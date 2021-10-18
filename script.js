
var i = 0;
var x = 0;
var y = 0;
var z = 0;
var txt = "Hi, I'm Keith Nelson";
var text = "I enjoy coding and watching the stock market (Thats where my interest in data science started)";
var text1 = "I love Fullstack development and designing, testing, and programming applications";
var text2 = "Soon to be graduate of Washington University in St. Louis";

//<p id="text">I enjoy coding and watching the stock market (Thats where my interest in data science started)</p>

//<p id="text1">I love Fullstack development and designing. testing, and programming applications </p>
//<hr>

//</hr><h4 id="text2">Soon to be graduate of Washington University in St. Louis</h4>

var speed = 100;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("name").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);

  }
}
function effecting(){
  if (x < text.length) {
    document.getElementById("text").innerHTML += text.charAt(x);
    x++;
    setTimeout(effecting, speed);
  }
}
function typeffect (){
  if (y < text1.length) {
    document.getElementById("text1").innerHTML += text1.charAt(y);
    y++;
    setTimeout(typeffect, speed);
  }

}
function typing(){
  if (z < text2.length) {
    document.getElementById("text2").innerHTML += text2.charAt(z);
    z++;
    setTimeout(typing, speed);
  }
}

$( function() {
  $("#accordion").accordion();
} );
    setTimeout(effecting, speed);
    setTimeout(typing, speed);
    setTimeout(typeffect, speed);