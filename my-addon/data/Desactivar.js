var inputs = $("input");
var textarea = $("textarea");
var Prestab = false;

for(var i=0; i<inputs.length; i++){
    if (inputs[i].type == "text"){
        inputs[i].onkeyup = true;
        inputs[i].onclick = true;
    }
}

for(var i=0; i<textarea.length; i++){
    textarea[i].onkeyup = true;
    textarea[i].onclick = true;
}
