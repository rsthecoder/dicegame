var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomImg = "dice" + randomNumber1 + ".png";
var randomImgSrc = "images/" + randomImg;

document.querySelectorAll("img")[0].setAttribute("src", randomImgSrc);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImg = "dice" + randomNumber2 + ".png";
var randomImgSrc = "images/" + randomImg;

document.querySelectorAll("img")[1].setAttribute("src", randomImgSrc);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Won!";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Won! 🚩";
} else {
  document.querySelector("h1").innerHTML = "͂Draw!";
}