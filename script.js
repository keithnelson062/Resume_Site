
var i = 0;
var txt = "Hi, I'm Keith Nelson";
var speed = 75;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("name").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
  
}


$( function() {
  $("#accordion").accordion();
} );
