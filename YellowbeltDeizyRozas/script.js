function openText(){
    document.querySelector(".col p").innerHTML+="<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda, voluptas. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor eligendi voluptatibus atque nihil doloribus beat</p>"
}

function cambia(){
    var photo= document.querySelector("img.col");
    photo.src="we_collect/dewey.webp";
}

function vuelve(){
    var photo= document.querySelector("img.col");
    photo.src= "we_collect/main_img.png"
}

function alerta(element){
    alert("has escogido "+ element.innerText);
}