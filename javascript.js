function createGrid(){
    const grid = document.querySelector(".grid");
    for(let i=0;i<256;i++){
        let newDiv = document.createElement("div");
        newDiv.classList.add("square");
        grid.appendChild(newDiv)
    }
}

function changeColor(){
    let box = document.querySelectorAll(".square")
    box.forEach(element => 
        element.addEventListener("mouseenter",function(){
            element.style.backgroundColor = 'blue';
        })
        );
}

createGrid();
changeColor();