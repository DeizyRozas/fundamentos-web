
function alerta(element){
    alert("Has seleccionado "+ element.innerText);

}

function dismiss(){
    document.querySelector(".window").remove();
}




// TEMPERATURAS POR DIA
// var hoy = [24, 18];
// var mañana= [27, 19];
// var viernes=[21, 16];
// var sabado= [26, 21];

// var 4dias = [{24, 18}, {}, {},{}]


// var arrTemp= document.querySelectorAll(".celsius");

function selectTemp(){
    var arrTemp = document.querySelectorAll(".celsius");
    var unidadDeMedida = document.getElementById("temperature");
    unidadDeMedida= unidadDeMedida.value;

    if(unidadDeMedida==kelvin){
        console.log(unidadDeMedida);
    }

    // for (var i = 0; i < arrTemp.length; i++) {
    //     var  temp= arrTemp[i].innerText;
    //     temp=Number(temp);
        
    // }


    // hoy[0] = hoy[0] * 9/5 + 32;
    // var gradosfarenheit = hoy[0];
    // console.log(gradosfarenheit);
    
}








// function selectTemp(){
//     celsiusafarenheit();
// }

//     
// }



    



    // console.log(document.getElementById("temperature").value);
    // 
    // var conversionFarenheit = celsius * 9/5 + 32;

    

    // var unidadDeMedida = document.querySelector("#temperature").value;
    // if (unidadDeMedida == kelvin){
        
    //     hoy[0] = conversionKelvin;
        




// celsiusakelvin();
