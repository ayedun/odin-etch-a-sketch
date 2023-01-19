let board = document.querySelector(".board")
let size = 16;
let brushColor = 'black'
let click = true;




function colorIn() {
   if(click){
    if(brushColor === 'random') {
        this.style.backgroundColor = 'hsla(' + (Math.random() * 360) + ', 100%, 50%, 1)';
       }
    else if(brushColor ==='white'){
        this.style.backgroundColor = 'white';


    }

       
        else { 
       this.style.backgroundColor = brushColor;
   }
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
     gridElement.style.backgroundColor = 'white';
     gridElement.classList.add("grid-element");
     board.insertAdjacentElement("beforeend", gridElement);
     gridElement.addEventListener('mouseover', colorIn);

}}

function changeSize(input) {
    if (input <1 || input > 100){
        alert("Invalid amount of squares. Please choose a number between 1 and 100")
    }
   else {
    createBoard(input);
   }


}

board.addEventListener('click', () =>{
    click = !click;
})


createBoard(size);