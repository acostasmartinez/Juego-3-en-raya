

let juegan = "X"

function marcarCasillas (evt){
    //la casilla donde se hizo click, cambiale el contenido
    evt.currentTarget.textContent = juegan;
    //una variable a la que le voy cambiando el valor
    // si es igual a una x cambia el valor a O, sino a X
    if(juegan == "X"){
        juegan = "O";
    }else {
        juegan = "X";
    }
}


const casillas = document.getElementsByClassName("casilla")
for (const casilla of casillas) {
    casilla.addEventListener("click", marcarCasillas)
    
}