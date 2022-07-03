function createGrid(amount){
    const grid = document.querySelector(".grid");
    for(let i=0;i<amount;i++){
        let newDiv = document.createElement("div");
        newDiv.classList.add("square");
        grid.appendChild(newDiv)
    }
    
    changeStyle(Math.sqrt(amount));
    changeColor();
}

function changeColor(){
    let box = document.querySelectorAll(".square")
    box.forEach(element => 
        element.addEventListener("mouseenter",function(){
            element.style.backgroundColor = "black";
        })
    );
}

function createNewGrid(){
    let button = document.querySelector(".new");
    button.addEventListener("click",function(){
        let amount = prompt("How many squares per side? (100 max)");
        while(amount > 100 || amount < 0){
            amount = prompt("Enter a valid number!")
        }

        remove();
        createGrid(amount*amount);
    });
}

function remove(){
    const box = document.querySelectorAll(".square");
    box.forEach(element => element.remove());
}

function changeStyle(amount){
    let grid = document.querySelector(".grid");
    grid.style.gridTemplateColumns = `repeat(${amount}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${amount}, 1fr)`;
}

createGrid(256);
createNewGrid();