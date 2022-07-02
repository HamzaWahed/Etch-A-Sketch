function createGrid(){
    const grid = document.querySelector(".grid");
    for(let i=0;i<256;i++){
        let newDiv = document.createElement("div");
        grid.appendChild(newDiv)
    }
}

