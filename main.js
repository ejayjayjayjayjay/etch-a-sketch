let container = document.querySelector('#section');
let btnBlack = document.createElement('button');
let btnGray = document.createElement('button');
let btnRGB = document.createElement('button');
let btnSize = document.createElement('button');
let buttonsContainer = document.querySelector('buttons');

function createDivs(col, rows) {
    for(let i = 0; i < (col * rows); i++){
        let div = document.createElement('div');
        div.style.border = "1px solid red";
        container.style.gridTemplateColumns = `repeat(${col}, ifr)`;
        container.style.gridTemplateRows = `repeat(${rows}, ifr)`;
        container.appendChild(div).classList.add('box');
    }
}

createDivs(16,16);