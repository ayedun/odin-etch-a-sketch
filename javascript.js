let board = document.querySelector(".board")
let size = 16;
let brushColor = 'black'




function colorIn() {
    if(brushColor === 'random') {
     this.style.backgroundColor = 'hsla(' + (Math.random() * 360) + ', 100%, 50%, 1)';
    }
     else { 
    this.style.backgroundColor = brushColor;
}
}

function changeColor(inputColor) {
    brushColor = inputColor


}

function reset() {
    let squares = document.querySelectorAll(".grid-element")

    squares.forEach(square => square.style.backgroundColor ='white')
}



function createBoard(size) {
    let squares = document.querySelectorAll(".grid-element")
    squares.forEach(squares => squares.remove());
    board.style.gridTemplateColumns = `repeat(${size},1fr)`;
    board.style.gridTemplateRows = `repeat(${size},1fr)`;
    for (i=0; i< size*size; ++i) {
     let gridElement = document.createElement("div");
     gridElement.style.backgroundColor = 'blue';
     gridElement.classList.add("grid-element");
     board.insertAdjacentElement("beforeend", gridElement);
     gridElement.addEventListener('mouseover', colorIn);

}}

function changeSize(input) {
    if (input <1 || input > 64){
        alert("Invalid amount of squares. Please choose a number between 1 and 64")
    }
   else {
    createBoard(input);
   }


}

createBoard(size);