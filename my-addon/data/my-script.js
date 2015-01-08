var inputs = $("input");
var textarea = $("textarea");
var Prestab = false;

for(var i=0; i<inputs.length; i++){
    if (inputs[i].type == "text"){
        inputs[i].onkeyup = function(e){
            if(e.keyCode == 32)
                Analizador();
        }
    }
}

for(var i=0; i<textarea.length; i++){
    textarea[i].onkeyup = function(e){
        if(e.keyCode == 32)
            Analizador();
    }
}


function Analizador(){
    var Texto = document.activeElement.value;
    var Separado;
    var PalabraAnterior;
    var PalabraActual;
    var PalabraSiguiente;


    //if(Texto.charAt(Texto.length-1) == " "){
    var patt = /\s+/
    Separado = Texto.split(patt);
    
    /*if(Separado.length == 0){
        PalabraActual = "$"; 
        Consulta(PalabraActual);
    }*/
    

   if(Separado[Separado.length-3] == undefined){
        PalabraActual = Separado[Separado.length-2];
        PalabraAnterior = "$";
        Insercion(PalabraAnterior,PalabraActual);
        Consulta(PalabraActual);
    }

    else{
        PalabraActual = Separado[Separado.length-2];
        PalabraAnterior = Separado[Separado.length-3];
        Insercion(PalabraAnterior,PalabraActual);
        Consulta(PalabraActual);
    }
    //   }
}


function Consulta(PalabraAnterior){
    var Datos = {PAnterior: PalabraAnterior};
    var Resultado;

    $.ajax({
        url: 'http://127.0.0.1:80/Teclado/Consulta-PHP.php',
        data: Datos,
        type: 'POST',
        dataType: 'json',
        success: function(datos){
            Resultado = datos;

            var tam = document.activeElement.value.length;
            document.activeElement.value +=Resultado[0].PalabraSiguiente;
            moverPosicionMouse(document.activeElement,tam);

            document.activeElement.onkeydown = function(e){
                if(e.keyCode == 9){
                    moverPosicionMouse(document.activeElement,document.activeElement.value.length);
                    Prestab = true;
                    return false;
                }
                else{
                    if(Prestab == false)
                        document.activeElement.value = document.activeElement.value.substr(0,tam);
                    Prestab = false;
                    document.activeElement.onkeydown = function(e){
                        return true;
                    }


                }
            }
        }
    });

}

function moverPosicionMouse(ctrl, pos){
    if(ctrl.setSelectionRange){
        ctrl.focus();
        ctrl.setSelectionRange(pos,pos);
    }
    else if(ctrl.createTextRange){
        var range = ctrl.createTextRange();
        range.collapse(true);
        range.moveEnd('character', pos);
        range.moveStart('character', pos);
        range.select();
    }
}

function Elegir(Datos){
    if(Datos != null && Datos.length !=0)
        document.activeElement.value += Datos[0].PalabraSiguiente;

}


function Insercion(PalabraAnterior,PalabraSiguiente){
    var Datos = {PAnterior: PalabraAnterior,
                 PSiguiente: PalabraSiguiente};

    $.ajax({
        url: 'http://127.0.0.1:80/Teclado/Insercion-PHP.php',
        data: Datos,
        type: 'POST',
        dataType: 'json',
        success: function(datos){
            // alert(datos[0].PalabraSiguiente);
        }
    });
}

