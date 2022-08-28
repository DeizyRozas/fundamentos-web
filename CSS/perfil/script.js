

var contacto=document.querySelector('#contacto');
var contacto2= document.querySelector('#contacto2');

function remove(){
    contacto.remove();
    document.querySelector(".conectionRequest").innerText--;
    
}   

function remove2(){
    contacto2.remove();
    document.querySelector(".conectionRequest").innerText--;
}   

function like(){
    document.querySelector(".yourConections").innerText++;
}

function editName(){
    var sign = window.prompt('Inserta tu nombre');
    document.querySelector(".nombre").innerText=sign;

}
