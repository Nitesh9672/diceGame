var randomNumber = Math.floor(Math.random() * 6) + 1;
var randomImage = "dice" + randomNumber + ".png";
var randomImagePath = "./images/" + randomImage;


var player1 = document.querySelectorAll("img")[0];
player1.setAttribute("src", randomImagePath);



var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImage2 = "dice" + randomNumber2 + ".png";
var randomImagePath2 = "./images/" + randomImage2;


var player2 = document.querySelectorAll("img")[1];
player2.setAttribute("src", randomImagePath2);

if (randomNumber > randomNumber2) {
    document.querySelector("h1").textContent = "🚩Player 1 Win!!"
}
else if (randomNumber < randomNumber2) {
    document.querySelector("h1").textContent = "🚩Player 2 Win!!"
}
else {
    document.querySelector("h1").textContent = "DRAW!!"
}


