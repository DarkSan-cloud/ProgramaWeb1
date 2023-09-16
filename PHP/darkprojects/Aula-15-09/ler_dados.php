<?php
//$nome = $_GET['nome'];
//$idade = $_GET['idade'];
$nome = $_POST['nome'];
$idade = $_POST['idade'];
$ling = $_POST['languange'];
echo "Seu nome é: $nome e sua idade é: $idade anos e você adora: $ling<hr>";
if ($idade >= 18) {
    echo "Pode Beber";
}else {
    echo "Nao pode Beber";
}


if(isset($_POST['v1'])){
    $v1 = $_POST['checkbox1'];
}else{
    $v1 = '';
}

if(isset($_POST['v2'])){
    $v2 = $_POST['checkbox2'];
}else{
    $v2 = '';
}

if (isset($_POST['v3'])){
    $v3 = $_POST['checkbox3'];    
}else{
    $v3 = '';
}

if(isset($_POST['fruta'])){
    $fruta = $_POST['fruta'];
    var_dump($fruta);
}

for($z=0;$z<count($fruta);$z++){
    echo $fruta[$z];
}



echo "Veiculos: $v1, $v2, $v3 <hr>";
?>