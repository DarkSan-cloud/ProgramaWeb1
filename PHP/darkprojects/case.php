<?php
$opcao = 'stop';
switch ($opcao) {
    case 'start':
        echo "Iniciando";
        break;

    case 'stop':
        echo "Parando";
        break;

    case 'restart':
        echo "Restart";
        break;

    default:
        echo "Erro";
        break;
}


?>