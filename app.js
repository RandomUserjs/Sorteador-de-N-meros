// Variáveis Globais
let quantidade = null;
let de = null;
let ate = null;
let numerosSorteados = [];

let botaoReiniciar = document.getElementById("btn-reiniciar")
botaoReiniciar.setAttribute("disabled", true);

// Função que sorteia os números escolhidos pelo usuário
function sortear() {
    numerosSorteados = []
    quantidade = parseInt(document.getElementById("quantidade").value);
    de = parseInt(document.getElementById("de").value);
    ate = parseInt(document.getElementById("ate").value);

    if (isNaN(quantidade) || isNaN(de) || isNaN(ate)) {
        alert("Preencha todos os campos corretamente!");
        quantidade = 0;
        de = 0;
        ate = 0;
        document.getElementById("quantidade").value = " ";
        document.getElementById("de").value = " ";
        document.getElementById("ate").value = " ";
        return;
    }

    if (quantidade > 10) {
        alert("Que tal escolher uma quantidade de números menor?");
        quantidade = 10;
        document.getElementById("quantidade").value = quantidade;
        return;
    }


    if (quantidade <= 0) {
        alert("A quantidade de números deve ser maior que 0!");
        quantidade = 1;
        document.getElementById("quantidade").value = quantidade;
        return;
    }
    if (de >= ate) {
        alert("O número máximo não pode ser igual ou menor que o mínimo!");
        ate = de + 3;
        document.getElementById("ate").value = ate;
        return;
    }
    for (let i = 1; i <= quantidade; i++) {
        let randomNumber = parseInt(Math.random() * ate + de);
        if (randomNumber >= de && randomNumber <= ate) {
            numerosSorteados.push(randomNumber);
        }
        else {
            i--;
        }

    }
    let texto = document.getElementsByClassName("texto__paragrafo")[3];
    texto.innerHTML = `Números sorteados: ${numerosSorteados}`;
    console.log(numerosSorteados);

    botaoReiniciar.removeAttribute("disabled");
}

function reiniciar() {
    numerosSorteados = [];
    quantidade = null;
    de = null;
    ate = null;
    document.getElementById("quantidade").value = " ";
    document.getElementById("de").value = " ";
    document.getElementById("ate").value = " ";
    let texto = document.getElementsByClassName("texto__paragrafo")[3];
    texto.innerHTML = "Números sorteados:  nenhum até agora";
    let botaoReiniciar = document.getElementById("btn-reiniciar")
    botaoReiniciar.setAttribute("disabled", true)
}