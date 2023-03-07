// References
const gridContainer = document.querySelector('.grid-container')
const resetBtn = document.getElementById('reset')
const removeBtn = document.getElementById('remove')

// Default grid size
let size = 16;
// Create Grid
function createGrid(gridSize) {
  for (let i = 0; i < gridSize; i++) {
    let column = document.createElement('div');
    column.className = 'column';

    for (let j = 0; j < gridSize; j++) {
      let row = document.createElement('div');
      row.className = 'row';
      column.appendChild(row);
    }
    gridContainer.appendChild(column);
  }
};
createGrid(size);
// Draw
function draw() {
  const allDivs = document.querySelectorAll('.row')
  allDivs.forEach(div => {
    div.addEventListener('mouseover', () => {
      div.style.backgroundColor = 'black';
    })
  })
};
// Create new grid
function removeGrid () {
    while (gridContainer.firstChild) gridContainer.removeChild(gridContainer.firstChild);
  }

resetBtn.addEventListener('click', () => {
  let userValue = Number(prompt('Enter size of new grid'))

  while (userValue > 100){
    userValue = Number(prompt('Only numbers less than 100 please.'))
  }
  while (gridContainer.firstChild) gridContainer.removeChild(gridContainer.firstChild);
  createGrid(userValue);
});