// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


let amigos = [];
let aleatorio = Math.floor(Math.random()*amigos.length);
let resultado = document.getElementById('resultado');
let lista = document.getElementById("listaAmigos");
let cajaTexto = document.getElementById("amigo");


function agregarAmigo(){

    let nombre = cajaTexto.value;

    if (nombre == "" ) {
        alert("Por favor escriba un nombre")
    }else{
        amigos.push(nombre);
    }

    cajaTexto.value = "";
    agregarLista();

    resultado.innerHTML = ""
   
}


function agregarLista() {
    
    lista.innerHTML = "";   

    for(let i = 0; i < amigos.length; i++){

        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);

    }

}


function sortearAmigo() {

    lista.innerHTML = "";
    resultado.innerHTML = "El nombre ganado es "+ amigos[aleatorio];

    amigos = [];
    
}