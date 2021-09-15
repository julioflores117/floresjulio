var text1= prompt (" Ingrese una palabra");
var contador = 0;
var n_elementos=text1.length;
var oportunidad=2;

var estatus= 0;
while(oportunidad>=0 && contador<n_elementos){
    var letra= prompt("introduce la latra");
    if(text1[contador]==letra){
        console.log("la letra es igual");
        contador++;
    }else{
        if(oportunidad==0){
            console.log("perdiste");
            estatus=1;
            break;
        }else{
            console.log("la letra no es igual");
            contador--;
        }
    }
}
if(estatus==0){
console.log("ganaste")
}else{
    console.log("perdiste")
}



   
