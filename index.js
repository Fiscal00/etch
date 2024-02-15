const canvas = document.querySelector('#canvas');
const slider = document.querySelector('.slider');
const sliderTextValue = document.querySelector('#slider-value');
const right = document.querySelector('#right');
const reset = document.querySelector('#reset-canvas');
const eraser =  document.querySelector('#eraser');
const pencil = document.querySelector('#pencil');
const toggle = document.querySelector('#toggle');
const pencilColor = document.querySelector('#pencil-color');
const backgroundColor = document.querySelector('#background-color');

let currentColor = '#000000';
let sliderText = document.createElement('p');
sliderText.setAttribute('id', 'slider-text');
sliderTextValue.appendChild(sliderText);

createGrid();

function createGrid(){
    let sliderValue = slider.value;
    let cellSize = (400 / sliderValue) - 2;
    const gridSize = sliderValue * sliderValue;
    sliderText.textContent = `${sliderValue} x ${sliderValue}`;
    for(i = 0; i < gridSize; i++){
        let cell = document.createElement('div');
        cell.textContent = '';
        cell.className = `cells`;
        cell.setAttribute('tabindex', '1');
        canvas.appendChild(cell);
        cell.style.height = `${cellSize}px`;
        cell.style.width = `${cellSize}px`;
        cell.addEventListener(`mousedown`, function(e){
            cell.style.background = `${currentColor}`;
        })   
    }    
}  

function resizeGrid(){
    let cell = document.getElementsByClassName(`cells`);
    while(cell[0]){
        cell[0].parentNode.removeChild(cell[0]);
    }
    createGrid();
}

slider.addEventListener("input", function(e){
    resizeGrid();
});

reset.addEventListener("click", function(e){
    if(confirm('Are you sure you want to reset?') == true){
        let cells = document.querySelectorAll('.cells');
        cells.forEach((cell) => cell.style.background = '#FFFFFF')
    }else{} 
});

eraser.addEventListener('click', function(e){
    eraser.style.background = '#78fdff';
    currentColor = '#FFFFFF';
})

pencil.addEventListener("click", function(e){
    currentColor = '#000000';
})

pencilColor.addEventListener('input', function(e){
    currentColor = pencilColor.value;
})

backgroundColor.addEventListener('input', function(e){
    let cells = document.querySelectorAll('.cells');
    cells.forEach(cell => {cell.style.background = backgroundColor.value;})
})
