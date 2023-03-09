// References
const gridContainer = document.querySelector('.grid-container')
const resetBtn = document.getElementById('reset')
const removeBtn = document.getElementById('remove')
const blackEnable = document.getElementById('blackColor')
const rgb = document.getElementById('rgb')

// Listeners
blackEnable.addEventListener('click', blackColor)
rgb.addEventListener('click', rgbToggle)

// Default grid size
let size = 16;
// Create Grid
function createGrid(size) {
  for (let i = 0; i < size; i++) {
    let column = document.createElement('div');
    // console.log(column)
    column.className = 'column';

    for (let j = 0; j < size; j++) {
      let row = document.createElement('div');
      row.className = 'row';
      column.appendChild(row);
    }
    gridContainer.appendChild(column);
  }
};
createGrid(size);

// Draw
let paintBlack = false;

function blackColor() {
  paintBlack = !paintBlack;
  if (paintBlack) {
    const allGrids = document.querySelectorAll('.row')
      allGrids.forEach(div => {
      div.addEventListener('mouseover', () => {
        div.style.backgroundColor = 'black';
      })
    })
  } 
};

// Eraser
const eraser = document.getElementById('eraser');
eraser.addEventListener('click', erase)
function erase() {
  paintBlack = !paintBlack;
  if (!paintBlack) {
    const allGrids = document.querySelectorAll('.row')
      allGrids.forEach(div => {
      div.addEventListener('mouseover', () => {
        div.style.backgroundColor = 'white';
      })
    })
  } 
};

// RGB
function randomInteger(max) {
  return Math.floor(Math.random() * (max + 1));
};
 
function randomRGBVal() {
  let r = randomInteger(255);
  let g = randomInteger(255);
  let b = randomInteger(255);

  return [r,g,b];
};

function randomHexVal() {
  let [r,g,b] = randomRGBVal();
  let hr = r.toString(16).padStart(2, '0');
  let hg = g.toString(16).padStart(2, '0');
  let hb = b.toString(16).padStart(2, '0');

  return "#" + hr + hg + hb;
};

let rgbMode = false;

function rgbToggle() {
  rgbMode = !rgbMode;
  if (rgbMode) {
    const allGrids = document.querySelectorAll('.row')
      allGrids.forEach(div => {
      div.addEventListener('mouseover', () => {
        div.style.backgroundColor = randomHexVal();
      })
    })
  }
};

// Create / Replace current grid with new user input values
resetBtn.addEventListener('click', () => {
  let userValue = Number(prompt('Enter size of new grid'))

  while (userValue > 100 || userValue <= 0 || !Number.isInteger(userValue)) {
    userValue = Number(prompt('Between 1 - 100'));
  }
  
  while (gridContainer.firstChild) gridContainer.removeChild(gridContainer.firstChild);
  createGrid(userValue);
});