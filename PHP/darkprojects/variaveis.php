<?php
$a = 1;
$b = 'Texto';
$c = 2.05;

$nomeCliente = 'Joao';
$nomecliente = "Pedro";
echo 'a - $a <br> b - $b <br> c - $c <br>';
echo "a - $a <br> b - $b <br> c - $c <br>";
echo "nomeCliente - $nomeCliente <br>";
echo "nomecliente - $nomecliente <br>";
echo 'a - '.$a .' <br> b - '.$b.' <br> c - '.$c.' <br>';     

$x = 5;
$y = 4 ;
$J = $x + $y; 

echo "<br>";    

echo $x + $y;
echo "<br> J - $J <br>";

$g = '5';
$h = '4';
$i = $g + $h;

echo "<br> Valor de i $i <br>";
#TIPO DE VARIAVEL BOOLEANO
$exibirNome = true      ;

if ($exibirNome) {
    # code...
    echo '<br> Variavel True';
}

if (!$exibirNome) {
    # code...
    echo '<br> Variavel False';
}

$umidade = 90;
$chover = ($umidade>=90);

if ($chover) {
    # code...
    echo '<br> Chover';
}else {
    # code...
    echo '<br> Nao Chover';
}

#VETORES
$vetor = array('1','2','3');

var_dump($vetor);
echo "<hr>"; 
print_r($vetor);

echo "<br>  $vetor[0] <br>";
echo  "$vetor[1] <br>";
echo "$vetor[2] <br> <hr>";

foreach ($vetor as $valor) {
    # code...
    echo "$valor <br>";
}

for ($k=0;
$k<count($vetor);
$k++) { 
    # code...
    echo "$vetor[$k] <br>";
}

# Função

