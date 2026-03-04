const botoes = Array.from(document.querySelectorAll(".btn"));
const botaoReiniciar = document.getElementById("reiniciar");
const placarXEl = document.getElementById("ptX");
const placarOEl = document.getElementById("ptO");
const placarEmpateEl = document.getElementById("ptEmpate");

let ptX = 0;
let ptO = 0;
let ptEmpate = 0;
let jogadorAtual = "X";
let jogoAtivo = true;
let tabuleiro = ["", "", "", "", "", "", "", "", ""];

const combinacoesVitoria = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function verificarVitoria() {
    for (const [a, b, c] of combinacoesVitoria) {
        if (tabuleiro[a] && tabuleiro[a] === tabuleiro[b] && tabuleiro[a] === tabuleiro[c]) {
            jogoAtivo = false;
            alert(`Jogador ${tabuleiro[a]} venceu!`);

            if (tabuleiro[a] === "X") {
                ptX++;
                placarXEl.textContent = ptX;
            } else {
                ptO++;
                placarOEl.textContent = ptO;
            }

            return true;
        }
    }

    if (!tabuleiro.includes("")) {
        jogoAtivo = false;
        ptEmpate++;
        placarEmpateEl.textContent = ptEmpate;
        alert("Empate!");
        return true;
    }

    return false;
}

function jogar(evento) {
    if (!jogoAtivo) {
        return;
    }

    const botao = evento.currentTarget;
    const indice = Number(botao.id.replace("btn", "")) - 1;

    if (tabuleiro[indice] !== "") {
        return;
    }

    tabuleiro[indice] = jogadorAtual;
    botao.textContent = jogadorAtual;

    if (!verificarVitoria()) {
        jogadorAtual = jogadorAtual === "X" ? "O" : "X";
    }
}

function reiniciarJogo() {
    jogadorAtual = "X";
    jogoAtivo = true;
    tabuleiro = ["", "", "", "", "", "", "", "", ""];

    botoes.forEach((botao) => {
        botao.textContent = "";
    });
}

botoes.forEach((botao) => {
    botao.addEventListener("click", jogar);
});

botaoReiniciar.addEventListener("click", reiniciarJogo);
