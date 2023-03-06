const gridContainer = document.querySelector('.grid-container')
const resetBtn = document.getElementById('reset')
const userValue = document.getElementById('grid-size')

// What Do?
  // User inputs grid size through slider
  // Submit slider value through button which then passes that value
  // as a parameter into createGrid function
 
// Create Grid
function createGrid() {
  gridSize = document.getElementById('grid-size').value;
  for (let i = 0; i < gridSize; i++) {
    let column = document.createElement('div');
    column.className = 'column';

    for (let j = 0; j < gridSize; j++) {
      let row = document.createElement('div');
      row.className = 'row';
      // Add Hover Effect
      row.addEventListener('mouseover',
        e => e.target.classList.add('hover-effect')
      )
      //
      column.appendChild(row);
    }
    gridContainer.appendChild(column);
  }
};
createGrid();
// 
