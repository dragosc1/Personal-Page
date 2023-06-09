// CREATE THE INITIAL GRID
const container = document.querySelector('.container');
const containerX = container.offsetWidth - (container.offsetWidth == 720 ? 2 : 1.8);
const containerY = container.offsetHeight - (container.offsetHeight == 720 ? 2 : 1.8);
console.log(containerX);
for (let i = 0; i < 16; i++)
    for (let j = 0; j < 16; j++) {
        let cell = document.createElement('div');
        cell.classList.add('cell');
        cell.style.width = `${containerX / 16}px`;
        cell.style.height = `${containerY / 16}px`;
        cell.style.border = "1px solid black"
        container.appendChild(cell);
    }

// RANDOM RGB COLOR
function randomRGB() {
    const R = Math.floor(Math.random() * 256);
    const G = Math.floor(Math.random() * 256);
    const B = Math.floor(Math.random() * 256);
    return `rgb(${R}, ${G}, ${B})`;
}

// BEGIN DRAWING
const begin = document.querySelector('.begin');
begin.addEventListener('click', function() {
    STOP = 0;
    container.addEventListener('mouseover', function(e) {
        if (!STOP && e.target.classList.contains("cell")) 
            if (!e.target.style.backgroundColor) {
                e.target.style.backgroundColor = randomRGB();
                e.target.value = 100;
            }
            else {
                const now = e.target.value - 10;
                if (now >= 0) {
                    e.target.style.filter = `brightness(${now}%)`; 
                    e.target.value = now;
                }
            }
    });
});

// STOP DRAWING 
function STOPF() {
    STOP = 1;
}
var STOP;
const stop = document.querySelector('.stop');
stop.addEventListener('click', STOPF);

// CHANGE GRID SIZE
const gridSize = document.querySelector('select');
function selectChange() {
    const size = gridSize.value;
    const cellSize = containerX / size;

    // EMPTY THE GRID AND CREATE THE NEW ONE
    container.innerHTML = '';
    for (let i = 0; i < size; i++)
        for (let j = 0; j < size; j++) {
            let cell = document.createElement('div');
            cell.classList.add('cell');
            cell.style.width = `${cellSize}px`;
            cell.style.height = `${cellSize}px`;
            cell.style.border = "1px solid black"
            container.appendChild(cell);
        }
}
gridSize.onchange = selectChange;

// RESET THE DRAWING
const resetButton = document.querySelector('.reset');
resetButton.addEventListener('click', selectChange);