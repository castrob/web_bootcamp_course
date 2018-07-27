var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var reset = document.getElementById("reset");
var score = document.getElementById("score");
var input = document.getElementById("input");
input.value = 5;
var deadline = document.getElementById("deadline");
var p1Score = 0;
var p2Score = 0;
var end = 5;

p1.addEventListener("click", function () {
    if(p1Score < end){
        p1Score++;
        console.log("Player one Score: " + p1Score);
        updateData();
    }
});

p2.addEventListener("click", function () {
    if(p2Score < end){
        p2Score++;
        console.log("Player two Score: " + p2Score);
        updateData();
    }
});

input.addEventListener("input", function () {
    end = input.value;
    updateData();
});

reset.addEventListener("click", function () {
    p1Score = 0;
    p2Score = 0;
    updateData();
});

function updateData() {
    score.textContent = p1Score + " to " + p2Score;
    deadline.textContent = "Playing to: " + end;
}