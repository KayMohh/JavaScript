//  [
//   "rgb(255, 0, 0)",
//   "rgb(255, 255, 0)",
//   "rgb(0, 255, 0)",
//   "rgb(0, 255, 255)",
//   "rgb(0, 0, 255)",
//   "rgb(255, 0, 255)",
// ];
var numOfSquares = 9;
var colors = generateRandomColors(numOfSquares);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
colorDisplay.textContent = pickedColor;
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.getElementById("reset");
var easyBtn = document.getElementById("easyBtn");
var midBtn = document.getElementById("midBtn");
var hardBtn = document.getElementById("hardBtn");

easyBtn.addEventListener("click", function () {
  easyBtn.classList.add("selected");
  midBtn.classList.remove("selected");
  hardBtn.classList.remove("selected");
  numOfSquares = 3;
  colors = generateRandomColors(numOfSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
});
midBtn.addEventListener("click", function () {
  easyBtn.classList.remove("selected");
  midBtn.classList.add("selected");
  hardBtn.classList.remove("selected");
  numOfSquares = 6;
  resetMed();
  // colors = generateRandomColors(numOfSquares);
  // pickedColor = pickColor();
  // colorDisplay.textContent = pickedColor;
  // for (var i = 0; i < squares.length; i++) {
  //   if (colors[i]) {
  //     squares[i].style.background = colors[i];
  //   }

  // } else {
  //   squares[i].style.display = "none";
  // }
});

function resetMed() {
  colors = generateRandomColors(numOfSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
}

hardBtn.addEventListener("click", function () {
  easyBtn.classList.remove("selected");
  midBtn.classList.remove("selected");
  hardBtn.classList.add("selected");
  numOfSquares = 9;
  colors = generateRandomColors(numOfSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];
    squares[i].style.display = "block";
  }
});

reset.addEventListener("click", function () {
  colors = generateRandomColors(numOfSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;

  for (var i = 1; i < squares.length; i++) {
    squares[i].style.background = colors[i];
  }
  h1.style.background = "#steelblue";
});

for (var i = 0; i < squares.length; i++) {
  squares[i].style.background = colors[i];

  squares[i].addEventListener("click", function () {
    var clickedColor = this.style.background;
    console.log(clickedColor, pickedColor);
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = "Correct";
      h1.style.background = clickedColor;
      reset.textContent = "Play Again";

      changeColors(clickedColor);
    } else {
      this.style.background = "#232323";
      messageDisplay.textContent = "Try Again";
    }
  });
}

function changeColors(color) {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = color;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push(randomColor());
  }

  return arr;
}

function randomColor() {
  //generate rgb
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);

  return "rgb(" + r + ", " + g + ", " + b + ")";
}
