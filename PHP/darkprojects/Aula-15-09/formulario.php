<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulário PHP/HTML</title>
    <link rel="stylesheet" type="text/css" href="estilo.css" media="screen">
</head>
<body>
    <div id="main">
        <form method="post" action="ler_dados.php">
            <label for="nome">Nome:</label>
            <input type="text" name="nome" id="nome">
            <label for="idade">Idade:</label>
            <input type="number" name="idade" id="idade">
            
            <br><input type="radio" name="languange" value="CSS">CSS<br>
            <input type="radio" name="languange" value="JAVASCRIPT">JAVASCRIPT<br>
            <input type="radio" name="languange" value="HTML">HTML<br>
            <button>Enviar</button>
            <!---- Checkbox tipo 1--->
            <br>
            <input type="checkbox" name="checkbox1" value="Bike">Bike
            <br>
            <input type="checkbox" name="checkbox2" value="Carro">Carro
            <br>
            <input type="checkbox" name="checkbox3" value="Moto">Moto<br>
            <!---- Checkbox tipo 2--->
            <hr>
            <input type="checkbox" name="fruta[]" value="Laranja">Laranja<br>
            <input type="checkbox" name="fruta[]" value="Banana">Banana<br>
            <input type="checkbox" name="fruta[]" value="Maça">Maça<br>           
            <input type="checkbox" name="fruta[]" value="Uva">Uva<br>
            <input type="checkbox" name="fruta[]" value="Pêra">Pêra<br>
            

        </form>
    </div>
</body>
</html>