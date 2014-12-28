var inputs = $("input");
var textarea = $("textarea");

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

        if(Separado[Separado.length-3] == undefined){
            PalabraActual = Separado[Separado.length-2];
            PalabraAnterior = "$";
        }

        else{
            PalabraActual = Separado[Separado.length-2];
            PalabraAnterior = Separado[Separado.length-3];
            //alert(PalabraActual);
            // alert(PalabraActual);
            Consulta(PalabraActual);
            Insercion(PalabraAnterior,PalabraActual);
           
        }
    }
}


function Consulta(PalabraAnterior){
    var Datos = {PAnterior: PalabraAnterior};

    $.ajax({
        url: 'http://192.168.1.101:80/Teclado/Consulta-PHP.php',
        data: Datos,
        type: 'POST',
        dataType: 'json',
        success: function(datos){
            document.activeElement.value += datos[0].PalabraSiguiente;
        }
    });
}



function Insercion(PalabraAnterior,PalabraSiguiente){
     var Datos = {PAnterior: PalabraAnterior,
                 PSiguiente: PalabraSiguiente};
      
     $.ajax({
        url: 'http://192.168.1.101:80/Teclado/Insercion-PHP.php',
        data: Datos,
        type: 'POST',
        dataType: 'json',
        success: function(datos){
            alert("HEcho");
        }
    });
}

