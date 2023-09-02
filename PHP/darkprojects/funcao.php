<?php
function pinga($dinheiro, $idade){
    if($idade>=18){
        if($dinheiro>=10){
            echo "BORA BEBER UM LITRÂO";
        }else{
            echo  "POBRE E ADULTO";
        }
    }else{
        echo  "TU É MENOR VACILÂO, NÂO PODE BEBER";
    }
   
}
pinga(10,20);
echo"<br>";

function pinga2($dinheiro, $idade){
    if($idade>=18){
        if($dinheiro>=10){
            $reposta =  "BORA BEBER UM LITRÂO";
        }else{
            $resposta =  "POBRE E ADULTO";
        }
    }else{
        $resposta =  "TU É MENOR VACILÂO";
    }
    return $resposta;
}

//pinga2(10,20);
echo "<hr> ";
$oi = pinga2(100,15);
echo "$oi";

?>  