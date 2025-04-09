console.log("Hola desde JS");

let textoBoton = document.querySelector(".login");
console.log(textoBoton.textContent);
textoBoton.addEventListener("click", function(){
    textoBoton.textContent = ("Cerrar sesión");
})

//function sesion(){
//    textoBoton = document.querySelector("login");
//    textoBoton.textContent =("Cerrar sesión");
//}

function alarma(){
    alert("Te gusto");
}

let borrar = document.querySelector(".botonLargo");
    borrar.addEventListener("click", function(borrarBoton){
        borrarBoton.target.remove();
    })

//function borrar(elemento){
//    elemento.target.remove();
//}