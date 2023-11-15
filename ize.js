const matrix = document.querySelector(".matrix");
function render(){
    matrix.innerHTML = "";
    for(let i = 0; i <25; i++){   const field =document.createElement("div");
    //esemeny figyelo
    field.addEventListener("click", coloring)
    field.classList.add("field");
    matrix.appendChild(field)
    }
}
function RandomColoring(){
    return Math.floor(Math.random()*254+1)
}
function coloring(){
    let r = randomColor();
    let g= randomColor();
    let b = randomColor();
}
render();