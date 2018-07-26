var button = document.querySelector("button");
button.addEventListener("click", toggleColor);

function toggleColor() {
    if (document.body.style.backgroundColor === "blue"){
        document.body.style.backgroundColor = "white";
    }else{
        document.body.style.backgroundColor = "blue";
    }
}