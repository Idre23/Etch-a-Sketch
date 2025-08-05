const divContainer = document.querySelector("#container");


for(i = 0; i < 256; i ++) {
    const square = document.createElement("div");
     square.classList.add("grid-square");
     divContainer.appendChild(square);
}

const changeSquare = document.querySelectorAll(".grid-square");

changeSquare.forEach(square => {
    square.addEventListener("mouseenter", () => {
        square.style.backgroundColor = "black";
    })
})

const resetbutton = document.querySelector("#resetBtn")
resetbutton.addEventListener("click", () => {
    alert("Please enter a number between 1 and 100:")
})