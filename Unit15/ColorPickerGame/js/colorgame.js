var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(255, 0, 255)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(255, 123, 12)"
];
var message = document.querySelector("#message");
var squares = document.querySelectorAll(".square");
var colorPicked = startNewGame();
var rgbField = document.querySelector("#rgbField");


rgbField.textContent = colorPicked;
for( var i = 0; i < squares.length; i++){
    // colocando cor em todos os divs
    squares[i].style.backgroundColor = colors[i];
    // criando o listener para todos os divs
    squares[i].addEventListener("click", function () {
        var clickedColor = this.style['background-color'];
        if(clickedColor === colorPicked){
            message.textContent = "Correct!"
            changeColors(clickedColor);
        }else {
            this.style['background-color'] = "#232323";
            message.textContent = "Try Again!";
        }
    })
}
// animacao de trocar a cor dos divs
function changeColors(color) {
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}
// escolher uma posicao aleatoria do nosso vetor de cores
function startNewGame() {
    return colors[Math.floor(Math.random() * colors.length)];
}