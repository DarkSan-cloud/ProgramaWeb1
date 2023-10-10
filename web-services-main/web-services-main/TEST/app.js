function fazerRequisicao() {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var data = JSON.parse(xhr.responseText);

            exibirResultado(data);
        }
    };

    xhr.open("GET", "http://reserva.Laboratorio.app.br:10100/produtos", true);
    xhr.send();
}//Faz a requisição

// Função para exibir os resultados na tabela
function exibirResultado(data) {
    var tabela = document.getElementById("resultadoTabela");
    tabela.innerHTML = ""; // Limpa a tabela

    data.forEach(function (item) {
        var row = tabela.insertRow();
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        var cell7 = row.insertCell(6);
        var cell8 = row.insertCell(7);

        cell1.innerHTML = item.id;
        cell2.innerHTML = item.codBarras;
        cell3.innerHTML = item.produto;
        cell4.innerHTML = item.marca;
        cell5.innerHTML = item.modelo;
        cell6.innerHTML = item.valor;
        cell7.innerHTML = cell7.innerHTML = '<button id="btnEditar"onclick="editarProduto(' + item.id + ')">Editar</button>';
        cell8.innerHTML = '<button id="btnExcluir" onclick="excluirProduto(' + item.id + ')">Excluir</button>';
    });
}

function excluirProduto(idProduto) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById("resposta").innerHTML = xhr.responseText;
            fazerRequisicao();
        }
    };

    xhr.open("DELETE", "http://reserva.Laboratorio.app.br:10100/produto/" + idProduto, true);
    xhr.send();
}//EXCLUI PRODUTOS

fazerRequisicao();

function cadastroProduto() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById("resposta").innerHTML = xhr.responseText;
            fazerRequisicao();
        }
    };

    let idProduto = document.getElementById("idProduto").value;
    let codBarras = document.getElementById("codBarras").value;
    let produto = document.getElementById("produto").value;
    let marca = document.getElementById("marca").value;
    let modelo = document.getElementById("modelo").value;
    let valor = document.getElementById("valor").value;

    const dados = {
        id: idProduto,
        codBarras: codBarras,
        produto: produto,
        marca: marca,
        modelo: modelo,
        valor: valor
    };

    console.log(dados);
    let envio = JSON.stringify(dados);

    xhr.open("POST", "http://reserva.Laboratorio.app.br:10100/produto", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(envio);

    fazerRequisicao();

    // Limpar os campos após o cadastro
    document.getElementById("idProduto").value = '';
    document.getElementById("codBarras").value = '';
    document.getElementById("produto").value = '';
    document.getElementById("marca").value = '';
    document.getElementById("modelo").value = '';
    document.getElementById("valor").value = '';
}//CADASTRA PRODUTOS

function editarProduto(idProduto) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var produto = JSON.parse(xhr.responseText);

            // Atualizando os campos do formulário com os dados do produto
            document.getElementById("idProduto").value = produto.id;
            document.getElementById("codBarras").value = produto.codBarras;
            document.getElementById("produto").value = produto.produto;
            document.getElementById("marca").value = produto.marca;
            document.getElementById("modelo").value = produto.modelo;
            document.getElementById("valor").value = produto.valor;

            // Alterando o texto do botão de ação (submit)
            document.getElementById("btnAcao").innerHTML = 'Salvar';

            // Definindo a função de clique para salvar a edição
            document.getElementById("btnAcao").onclick = function () {
                salvarEdicaoProduto(idProduto);
            };
        }
    };
    xhr.open("GET", "http://reserva.Laboratorio.app.br:10100/produto/" + idProduto, true);
    xhr.send();
}






function salvarEdicaoProduto(idProduto) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById("resposta").value = xhr.responseText;
            fazerRequisicao();

            // Após editar, limpar os campos e resetar o botão para o modo de cadastro
            document.getElementById("idProduto").value = '';
            document.getElementById("codBarras").value = '';
            document.getElementById("produto").value = '';
            document.getElementById("marca").value = '';
            document.getElementById("modelo").value = '';
            document.getElementById("valor").value = '';

            document.getElementById("btnAcao").innerHTML = 'Cadastrar';
            document.getElementById("btnAcao").onclick = function () {
                // Defina aqui a função para criar um novo produto
            };
        }
    };

    let codBarras = document.getElementById("codBarras").value;
    let produto = document.getElementById("produto").value;
    let marca = document.getElementById("marca").value;
    let modelo = document.getElementById("modelo").value;
    let valor = document.getElementById("valor").value;

    const dados = {
        codBarras: codBarras,
        produto: produto,
        marca: marca,
        modelo: modelo,
        valor: valor
    };

    xhr.open("PUT", "http://reserva.Laboratorio.app.br:10100/produto/" + idProduto, true); // Mude para PUT
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify(dados));
}
