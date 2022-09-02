
function alerta(element){
    alert("Has seleccionado "+ element.innerText);

}

function dismiss(){
    document.querySelector(".window").remove();
}





function selectTemp(){
    var arrTemp = document.querySelectorAll(".celsius");
    var unidadDeMedida = document.getElementById("temperature");
    unidadDeMedida= unidadDeMedida.value;

    

    for (var i = 0; i < arrTemp.length; i++) {
        var  temp= arrTemp[i].innerText;
        temp=Number(temp);

        if(unidadDeMedida=="farenheit"){
        
            var conversion = temp * 9/5 + 32;
        }

        else{
            temp = (temp - 32) * 5/9;
            var conversion = Math.round(temp);
        }

        arrTemp[i].innerText= conversion;
    }
}

