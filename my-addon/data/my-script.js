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
            alert(PalabraActual);
        }
    }
}


function Consulta(PalabraAnterior,PalabraSiguiente){
    var Datos = [PalabraAnterior,PalabraSiguiente];
    
  /*  $.ajax({
        url: 'Productos-ajax.php',
        data: Datos,
        type: 'POST',
        dataType: 'json',
        success: function(datos){
            for (var i = 0; i < datos.length; i++)
                $('#respuesta').append('<b>Id:</b> '+datos[i].Id+' <b>Nombre:</b> '+datos[i].Nombre+' <b>Descripcion:</b> '+datos[i].Descripcion+
                                       ' <b>Precio:</b> '+datos[i].Precio+' <b>Stock:</b> '+datos[i].Stock+'<br>');
            $('#respuesta').append('<br><i><b>'+datos.length+'</b> resultados</i>');
        }
    });*/
}

function Insercion(PalabraAnterior,PalabraSiguiente){

}

function Update(PalabraAnterior,PalabraSiguiente){

}