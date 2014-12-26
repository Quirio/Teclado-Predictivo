var inputs = document.getElementsByTagName("input");
var textarea = document.getElementsByTagName("textarea");

for(var i=0; i<inputs.length; i++){
    if (inputs[i].type == "text")
        inputs[i].onkeyup = Analizador;  
}

for(var i=0; i<textarea.length; i++){
   textarea[i].onkeyup = Analizador;  
}

 
function Analizador(){
    var Texto = document.activeElement.value;
    var Separado;
    var PalabraAnterior;
    var PalabraActual;
    var PalabraSiguiente;
  
    
    if(Texto.charAt(Texto.length-1) == " "){
        Separado = Texto.split(" ");
        if(Separado.length >= 2){    
            PalabraActual = Separado[Separado.length-2];
            PalabraAnterior = Separado[Separado.length-3];
            console.log(PalabraActual + " s "  + PalabraAnterior + " s");
        }
                
        else{
                
        }
    }
}