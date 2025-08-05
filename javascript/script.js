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
    let gridSize = prompt("Please enter a number between 1 and 100:");
    createGrid(gridSize);
})

function createGrid(gridSize) {
    divContainer.innerHTML = "";
    if(gridSize < 1 || gridSize > 100 || isNaN(gridSize)) {
        alert("Try a number between 1 and 100");
        return;
    }
    for(let i = 0; i < gridSize * gridSize; i ++) {
        const square = document.createElement("div");
        square.classList.add("grid-square");
        divContainer.appendChild(square);
        let squareSize = 960 / gridSize;
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
    }
    const changeSquare = document.querySelectorAll(".grid-square")
    changeSquare.forEach(square => {
    square.addEventListener("mouseenter", () => {
        square.style.backgroundColor = "black";
    })
})
}