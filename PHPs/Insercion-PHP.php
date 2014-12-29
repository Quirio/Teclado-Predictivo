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

function ConsultaSQL(){

    $PalabraAnterior = $_POST['PAnterior'];
    $PalabraSiguiente = $_POST['PSiguiente'];

    $sql = "SELECT * FROM palabras WHERE (PalabraAnterior = \"".  $PalabraAnterior . "\" AND PalabraSiguiente = \"".  $PalabraSiguiente . "\")";

    //Creamos la conexión con la función anterior
    $conexion = connectDB();

    //generamos la consulta

    mysqli_set_charset($conexion, "utf8"); //formato de datos utf8

    if(!$result = mysqli_query($conexion, $sql)) die(); //si la conexión cancelar programa

    $rawdata = array(); //creamos un array

    //guardamos en un array multidimensional todos los datos de la consulta
    $i=0;

    while($row = mysqli_fetch_array($result))
    {
        $rawdata[$i] = $row;
        $i++;
    }

    disconnectDB($conexion); //desconectamos la base de datos

    return $rawdata; //devolvemos el array
}

function Update(){

    $PalabraAnterior = $_POST['PAnterior'];

    $PalabraSiguiente = $_POST['PSiguiente'];

 $sql = "UPDATE palabras SET Coincidencia = Coincidencia +1, Tiempo = CURRENT_TIMESTAMP WHERE (PalabraAnterior = \"".  $PalabraAnterior . "\" AND PalabraSiguiente = \"". $PalabraSiguiente . "\")"; 

    //Creamos la conexión con la función anterior
    $conexion = connectDB();

    //generamos la consulta

    mysqli_set_charset($conexion, "utf8"); //formato de datos utf8

    if(!$result = mysqli_query($conexion, $sql)) die(); //si la conexión cancelar programa

    disconnectDB($conexion); //desconectamos la base de datos

}

function Insert(){

    $PalabraAnterior = $_POST['PAnterior'];

    $PalabraSiguiente = $_POST['PSiguiente'];

    $sql = "INSERT INTO palabras VALUES ( \"".  $PalabraAnterior . "\",\"" . $PalabraSiguiente . "\",1,CURRENT_TIMESTAMP)";

    //Creamos la conexión con la función anterior
    $conexion = connectDB();

    //generamos la consulta

    mysqli_set_charset($conexion, "utf8"); //formato de datos utf8

    if(!$result = mysqli_query($conexion, $sql)) die(); //si la conexión cancelar programa

    disconnectDB($conexion); //desconectamos la base de datos

}


$ArrayConsulta = ConsultaSQL();

if(count($ArrayConsulta) !=0)
    Update();
else
    Insert();
echo json_encode($ArrayConsulta);
?>