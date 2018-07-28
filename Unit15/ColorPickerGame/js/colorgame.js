
//selecting elements on html
var message = document.querySelector("#message");
var squares = document.querySelectorAll(".square");
var rgbField = document.querySelector("#rgbField");
var h1 = document.querySelector("h1");
var buttonNewGame = document.querySelector("#newGame");
var buttonEasy = document.querySelector("#easy");
var buttonNormal = document.querySelector("#normal");

// logical area
var difficulty = 6;
var colors;
var colorPicked;
startNewGame(difficulty);


//listeners
buttonNewGame.addEventListener("click", function () {
    startNewGame(difficulty);
});

buttonEasy.addEventListener("click", function () {
   difficulty = 3;
   startNewGame(difficulty);
   buttonEasy.classList.add("selected");
   buttonNormal.classList.remove("selected");
});

buttonNormal.addEventListener("click", function () {
    difficulty = 6;
    startNewGame(difficulty);
    buttonNormal.classList.add("selected");
    buttonEasy.classList.remove("selected");
});


// animacao de trocar a cor dos divs
function changeColors(color) {
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

// start a new game
function startNewGame(gameDifficulty) {
    colors = generateRandomColors(gameDifficulty);
    colorPicked = colors[Math.floor(Math.random() * colors.length)];
    rgbField.textContent = colorPicked;
    buttonNewGame.textContent = "New Game";
    h1.style['background-color'] = "#232323";
    message.textContent = "";

    for( var i = 0; i < squares.length; i++){
        // colocando cor em todos os divs
        squares[i].style.backgroundColor = "#232323";
        squares[i].style.backgroundColor = colors[i];
        // criando o listener para todos os divs
        squares[i].addEventListener("click", function () {
            var clickedColor = this.style['background-color'];
            if(clickedColor === colorPicked){
                message.textContent = "Correct!";
                buttonNewGame.textContent = "Play Again!";
                h1.style['background-color'] = clickedColor;
                changeColors(clickedColor);
            }else {
                this.style['background-color'] = "#232323";
                message.textContent = "Try Again!";
            }
        });
    }
}

//service functions
function generateRandomColors(num) {
    var randomColors = [];
    for(var i = 0; i < num; i++){
        randomColors[i] = "rgb(" + Math.floor(Math.random() * 255 + 1) + ", " + Math.floor(Math.random() * 255 + 1) + ", " + Math.floor(Math.random() * 255 + 1) + ")";
    }
    return randomColors;
}