console.log("Hola desde JS");

////--------------------- CERRAR SESION ----------------------------------
//-------------------------- Método 1 ----------------------------------
//let textoBoton = document.querySelector(".login");
//console.log(textoBoton.textContent);
//textoBoton.addEventListener("click", function(){
//    textoBoton.textContent = ("Cerrar sesión");
//})

//-------------------------- Método 2 ----------------------------------
function sesion(){
    textoBoton = document.querySelector(".login");
    textoBoton.innerHTML = ("Cerrar sesión");
}

//--------------------------  ALERTA  ----------------------------------
//-------------------------- Método 1 ----------------------------------
let nombre = document.querySelectorAll("h2");
nombre.forEach((texto)=>{
    console.log(texto.textContent);
})

//-------------------------- Método 2 ----------------------------------
function alarma(elemento){
    nombreElemento = elemento.parentNode;
    titulo = nombreElemento.querySelector("h2")
    alert("Te gustó" + " " + titulo.textContent);
}

//---------------------- BORRAR ELEMENTO ----------------------------------
//-------------------------- Método 1 ----------------------------------
let borrar = document.querySelector(".botonLargo");
    borrar.addEventListener("click", function(borrarBoton){
        borrarBoton.target.remove();
    })

//-------------------------- Método 2 ----------------------------------
//function borrar(elemento){
//    elemento.remove();
//}





//------------------------- NOTAS EXTRA ---------------------------------
//for.each
//<div class="animal">
//        <h2>Perro</h2>
//const animales = document.querySelectorAll('h2');

//animales.forEach(h2 => {
//    h2.addEventListener('click', function() {
//        const nombreElemento = h2.textContent; 
//        alert("Te gustó " + nombreElemento);
//    });