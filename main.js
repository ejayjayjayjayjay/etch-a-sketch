let color = "black";
let btn = document.querySelector('.buttons');
let blackBtn = document.createElement('button');
let grayBtn = document.createElement('button');
let eraseBtn = document.createElement('button');
let rndBtn = document.createElement('button');
let clearBtn = document.createElement('button');

// add black button into the DOM
blackBtn.className = "black-button";
blackBtn.style.cssText = "background-color: #0a0a23; color: #fff; margin: 20px 10px 0 0; border-radius: 10px; padding: 10px 30px; cursor: pointer;";
blackBtn.textContent = "Black";
blackBtn.onclick = function () {
    changeColor("black");
};
btn.appendChild(blackBtn);

// add gray button into the DOM
grayBtn.className = "gray-button";
grayBtn.style.cssText = "background-color: #0a0a23; color: #fff; margin: 20px 10px 0 0; border-radius: 10px; padding: 10px 30px; cursor: pointer;";
grayBtn.textContent = "Gray";
grayBtn.onclick = function () {
    changeColor("gray");
};
btn.appendChild(grayBtn);

// add random-color button into the DOM
rndBtn.className = "random-button";
rndBtn.style.cssText = "background-color: #0a0a23; color: #fff; margin: 20px 10px 0 0; border-radius: 10px; padding: 10px 30px; cursor: pointer;";
rndBtn.textContent = "RGB";
rndBtn.onclick = function () {
    changeColor("random");
};
btn.appendChild(rndBtn);

// add erase button into the DOM
eraseBtn.className = "erase-button";
eraseBtn.style.cssText = "background-color: #0a0a23; color: #fff; margin: 20px 10px 0 0; border-radius: 10px; padding: 10px 30px; cursor: pointer;";
eraseBtn.textContent = "Erase";
eraseBtn.onclick = function () {
    changeColor("white");
};
btn.appendChild(eraseBtn);

// add reset button into the DOM
clearBtn.className = "clear-button";
clearBtn.style.cssText = "background-color: #0a0a23; color: #fff; border-radius: 10px; padding: 10px 30px; cursor: pointer;";
clearBtn.textContent = "clear";
clearBtn.onclick = function () {
    reset();
}
btn.appendChild(clearBtn);

// create grid container
function createGrid (size) {
    let board = document.querySelector('.container');
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let amount = size * size;
    for (let i = 0; i < amount; i++) {
        let square = document.createElement('div');
        square.addEventListener('mouseover', colorSquare)
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
        alert("You input invalid size it should not exceed to 100 and below 2");
        console.log("error");
    }
}

// event for changing color
function colorSquare () {
    if (color === "random") {
        // generate random colors
        var randomColor = Math.floor(Math.random()*16777215).toString(16);
        this.style.backgroundColor = "#"+randomColor;
    } else {
        this.style.backgroundColor = color;
    }
}

// change the color by choosing button
function changeColor (choice) {
    color = choice;
    console.log(`Selected color: ${color}`);
}

// Reset the grid container

function reset () {
    let board = document.querySelector('.container');
    board.childNodes.forEach((square) => square.style.backgroundColor = "white");
}