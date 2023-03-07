// References
const gridContainer = document.querySelector('.grid-container')
const resetBtn = document.getElementById('reset')
const removeBtn = document.getElementById('remove')
const blackEnable = document.getElementById('blackColor')

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

blackEnable.addEventListener('click', blackColor)

function blackColor() {
  paintBlack = !paintBlack;
  if (paintBlack) {
    const allGrids = document.querySelectorAll('.row')
      allGrids.forEach(div => {
      div.addEventListener('mouseover', () => {
        div.style.backgroundColor = 'black';
      })
    })
  } else {
    const allGrids = document.querySelectorAll('.row')
      allGrids.forEach(div => {
      div.addEventListener('mouseover', () => {
        div.style.backgroundColor = 'white';
      })
    })
  };
};
blackColor();

// Create new grid
resetBtn.addEventListener('click', () => {
  let userValue = Number(prompt('Enter size of new grid'))

  while (userValue > 100){
    userValue = Number(prompt('Only numbers less than 100 please.'))
  }
  while (gridContainer.firstChild) gridContainer.removeChild(gridContainer.firstChild);
  createGrid(userValue);
});