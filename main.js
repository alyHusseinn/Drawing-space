const board = document.querySelector('.board');
const selectButton = document.querySelector('#popup');
let ColorChoice = 'black';
let Click = false;
// const Choice = document.querySelector('#choice');

document.querySelector("body").addEventListener('click',(e)=>{
    if(e.target.tagName != "BUTTON"){
        Click = !Click;
    }
});

function generateSquares(Size){

    board.style.gridTemplateColumns = `repeat(${Size},1fr)`;
    board.style.gridTemplateRows = `repeat(${Size},1fr)`;
    let NumberOfSquares = Size * Size;

    for(let i = 0; i < NumberOfSquares; ++i){
        let div = document.createElement("div");
        div.classList.add('square');
        board.appendChild(div);
        div.addEventListener('mousemove',ColorDiv)
    }
}

function getSize(){
    let Size = prompt('Enter the number of squares less than 100');

    Size = Number(Size);
    if(Size > 100 || Size < 1 || Size === ""){
        getSize();
    }
    generateSquares(Size);
}

function ColorDiv(){
    if(Click){
        if(ColorChoice == 'black') this.style.backgroundColor = 'black';
        else this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    }
    
}

function setColor(color){
    ColorChoice = color;    
}

function reset(){
    const divs = document.querySelectorAll('.square');
    divs.forEach((div) => div.style.backgroundColor = 'white');
}
selectButton.addEventListener('click', getSize);

