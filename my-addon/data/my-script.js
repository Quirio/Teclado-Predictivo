var inputs = document.getElementsByTagName("input");
var textarea = document.getElementsByTagName("textarea");

for(var i=0; i<inputs.length; i++){
    if (inputs[i].type == "text")
        inputs[i].onclick = Analizador;  
}

for(var i=0; i<textarea.length; i++){
   textarea[i].onclick = Analizador;  
}

 
function Analizador(){
    alert("Me has seleccionado");
}