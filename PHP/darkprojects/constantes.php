<?php
// CONSTANTES

DEFINE ('NOME',"Marcos");
define('IDADE',20);

echo 'Constante'.NOME.'<br>Idade'.IDADE.'<br>';

echo "URL SOLICITADA $_SERVER[REQUEST_URI]<hr>";
echo "IP REMOTO $_SERVER[REMOTE_ADDR]<br>";

$x = 10;
echo ++$x.'<br>'; echo"$x <br>";
$x = 10;
echo $x++.'<br>'; echo"$x <br>";// Incremento
$x = 10;
echo --$x.'<br>'; echo"$x <br>";
$x = 10;
echo $x--.'<br>'; echo"$x <br>"; // Decremento
?>