const container = document.querySelector('.container')

function clearGrid (boxNodes) {

    const container = document.querySelector('.container')

    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }
}

function createGrid (gridSize = 16) {
    if (!gridSize) {
        gridSize = 16
    }

    let counter = 0

    for (let i = 0; i < gridSize; i++) {
      const gridRow = document.createElement("div");
      gridRow.classList.add("grid-row");
      container.appendChild(gridRow);

      for (let j = 0; j < gridSize; j++) {
        const gridBox = document.createElement("div");
        gridBox.classList.add("grid-box");
        gridBox.setAttribute("id", counter);
        gridRow.appendChild(gridBox);
        counter++;
      }
    }

    const gridBoxNodes = document.querySelectorAll(".grid-box");

    gridBoxNodes.forEach((box) => {
      box.addEventListener("mouseover", (box) => {
        const currentBox = document.getElementById(`${box.target.id}`);
        const rgb = changeBoxColor();
        currentBox.style.backgroundColor = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
      });
    });
}

function getGridSize () {
    const choice = +prompt('Enter a Number between 1 and 100')
    if (choice > 1 && choice < 100) {
        return choice
    } else {
        alert('Invalid Number')
        return ''
    }
}

function changeBoxColor () {
  let rgb = [];

  for (let i = 0; i < 3; i++) {
    rgb.push(Math.floor(Math.random() * 255));
  }

  return rgb;
}

createGrid()

const btn = document.getElementById('reset')

btn.addEventListener('click', () => {
    clearGrid()
    const choice = getGridSize()
    createGrid(choice)
})

