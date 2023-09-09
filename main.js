let color = "black"
let btn = document.querySelector('.buttons');
let blackBtn = document.createElement('button');
let grayBtn = document.createElement('button');
let eraseBtn = document.createElement('button');

// add black button into the DOM
blackBtn.className = "black-button";
blackBtn.style.cssText = "border-radius: 10px; padding: 10px 30px; cursor: pointer;";
blackBtn.textContent = "Black";
btn.appendChild(blackBtn);

// add gray button into the DOM
grayBtn.className = "gray-button";
grayBtn.style.cssText = "border-radius: 10px; padding: 10px 30px; cursor: pointer;";
grayBtn.textContent = "Gray";
btn.appendChild(grayBtn);

// add erase button into the DOM
eraseBtn.className = "erase-button";
eraseBtn.style.cssText = "border-radius: 10px; padding: 10px 30px; cursor: pointer;";
eraseBtn.textContent = "Erase";
btn.appendChild(eraseBtn);

// create grid container
function createGrid (size) {
    let board = document.querySelector('.container');
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let amount = size * size;
    for (let i = 0; i < amount; i++) {
        let square = document.createElement('div');
        square.addEventListener('mouseover', changeColor);
        square.style.border = "1px solid black";
        board.appendChild(square).classList.add('box');
    }
}

createGrid(16);

// change the size of grid container
function changeSize(input) {
    if (input >= 2 && input <= 100) {
        // Remove existing squares before creating a new grid
        let board = document.querySelector('.container');
        while (board.firstChild) {
            board.removeChild(board.firstChild);
        }
        createGrid(input);
    } else {
        console.log("error");
    }
}

// change the color hover
function changeColor () {
    this.style.backgroundColor = "black";
}