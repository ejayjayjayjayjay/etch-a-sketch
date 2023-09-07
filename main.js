let section = document.querySelector('#section');
let container = document.querySelector('.container');
let btnBlack = document.createElement('button');
let btnGray = document.createElement('button');
let btnRGB = document.createElement('button');
let btnSize = document.createElement('button');
let buttonsContainer = document.querySelector('buttons');

function createDivs(col, rows) {
    for(let i = 0; i < (col * rows); i++){
        let div = document.createElement('div');
        div.style.border = "1px solid #000";
        container.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
        container.appendChild(div).classList.add('box');
    }
}

createDivs(16,16);