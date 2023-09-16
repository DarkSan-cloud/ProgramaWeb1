<?php

$arquivo = $_FILES['arquivo'];
var_dump($arquivo);
$tipo = $arquivo['type'];
$tipo = explode('/', $arquivo['type']);

//move_uploaded_file($arquivo['tmp_name'], 'arquivos/'.$arquivo['name']);
?>