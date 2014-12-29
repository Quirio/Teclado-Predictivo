<?php 
header('Access-Control-Allow-Origin: *');
function connectDB(){

    $server = "localhost";
    $user = "Teclado";
    $pass = "t";
    $bd = "palabras";

    $conexion = mysqli_connect($server, $user, $pass,$bd);

    if($conexion){
        // echo 'La conexion de la base de datos se ha hecho satisfactoriamente
    }else{
        // echo 'Ha sucedido un error inexperado en la conexion de la base de datos
    }

    return $conexion;
}

function disconnectDB($conexion){

    $close = mysqli_close($conexion);

    if($close){
        //echo 'La desconexion de la base de datos se ha hecho satisfactoriamente
    }else{
        //echo 'Ha sucedido un error inexperado en la desconexion de la base de datos
    }   

    return $close;
}

function getArraySQL(){

    $PalabraAnterior = $_POST['PAnterior'];

    $PalabraSiguiente = $_POST['PSiguiente'];

    $sql = "IF EXISTS (SELECT * FROM palabras WHERE (PalabraAnterior = \"".  $PalabraAnterior . "\" AND PalabraSiguiente = \"".  $PalabraSiguiente . "\")) UPDATE palabras SET (Coincidencia = Coincidencia +1, Tiempo = CURRENT_TIMESTAMP) WHERE (PalabraAnterior = \"".  $PalabraAnterior . "\" AND PalabraSiguiente = \"".  $PalabraSiguiente . "\") ELSE INSERT INTO palabras VALUES ( \"".  $PalabraAnterior . "\",\"" . $PalabraSiguiente . "\",1,CURRENT_TIMESTAMP)";

    //Creamos la conexión con la función anterior
    $conexion = connectDB();

    //generamos la consulta

    mysqli_set_charset($conexion, "utf8"); //formato de datos utf8

    if(!$result = mysqli_query($conexion, $sql)) die(); //si la conexión cancelar programa

    disconnectDB($conexion); //desconectamos la base de datos

}
getArraySQL();
echo "hecho";
?>




IF EXISTS (SELECT * FROM palabras WHERE (PalabraAnterior = "hola" AND PalabraSiguiente = "Suso"))
BEGIN
UPDATE palabras SET (Coincidencia = Coincidencia +1, Tiempo = CURRENT_TIMESTAMP) 
WHERE (PalabraAnterior = "hola" AND PalabraSiguiente = "Suso")
END
ELSE INSERT INTO palabras VALUES ( "hola" ,"Suso",1,CURRENT_TIMESTAMP)