let jogadorAtual ='X';
let jogo = ["", "", "", "", "", "", "", "", ""];

function mudaCell(index) {
    if (jogo[index] === "") {
        jogo[index] = jogadorAtual;
        document.getElementsByClassName("cell")[index].innerText = jogadorAtual;
        if (checkVitoria()) {
            alert(jogadorAtual + " GANHOU!");
            resetGame();
        } else if (checkEmpate()) {
            alert("EMPATE!");
            resetGame();
        } else {
            jogadorAtual = jogadorAtual === "X" ? "O" : "X";
        }
    }
}

function checkVitoria(){
    const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for(let condition of winConditions){
        if(
            jogo[condition[0]] === jogadorAtual &&
            jogo[condition[1]] === jogadorAtual &&
            jogo[condition[2]] === jogadorAtual
        ){
            return true;
        }
    }
    return false;
}

function checkEmpate(){
    return jogo.every(cell => cell !== "");
}

function resetGame(){
    jogadorAtual = "X";
    jogo = ["", "", "", "", "", "", "", "", ""];
    let cells = document.getElementsByClassName("cell");
    for(let i = 0; i < cells.length; i++){
        cells[i].innerText = "";
    }
}