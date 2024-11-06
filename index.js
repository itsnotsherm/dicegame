var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
var randomNumber2 = Math.floor(Math.random() * 6) + 1; //1-6

var randomImage1 = "images/dice" + randomNumber1 + ".png"; 
var randomImage2 = "images/dice" + randomNumber2 + ".png";

document.querySelector(".img1").setAttribute("src", randomImage1);
document.querySelector(".img2").setAttribute("src", randomImage2);