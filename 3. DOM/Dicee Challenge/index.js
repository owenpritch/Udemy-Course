function randomNumber() {
    return Math.floor(Math.random() * 6) + 1;
}


var randomNumber1 = randomNumber();
var randomNumber2 = randomNumber();

var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];
var h1 = document.querySelector("h1")

var randomImageSource1 = "images/dice" + randomNumber1 + ".png";
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";


image1.setAttribute("src", randomImageSource1);
image2.setAttribute("src", randomImageSource2);

if(randomNumber1 > randomNumber2) {
    h1.innerHTML = "Player 1 wins!";
} else if(randomNumber2 > randomNumber1) {
    h1.innerHTML = "Player 2 wins!";
} else {
    h1.innerHTML = "Draw!";
}