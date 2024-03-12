let numerosSorteados = [];

function sortear() {
    numerosSorteados = []
    let quantidade = document.getElementById("quantidade").value;
    let de = document.getElementById("de").value;
    let ate = document.getElementById("ate").value;
    if (quantidade == "" || de == "" || ate == "") 
    {
        alert("Preencha todos os campos!");
        return;
    }
    if (quantidade > 10)
    {
        alert("Que tal escolher uma quantidade de números menor?");
        quantidade = 10;
        document.getElementById("quantidade").value = quantidade;
        return;
    }
    
    
    if (quantidade <= 0) 
    {
       alert("A quantidade de números deve ser maior que 0!");
        return;
    }
    if (de >= ate)
    {
        alert("O número máximo não pode ser igual ou menor que o mínimo!");
        return;
    }
    for (let i = 1; i <= quantidade; i++) {
        let randomNumber = parseInt(Math.random() * ate + de);
        if (randomNumber >= de && randomNumber <= ate) 
        {
            numerosSorteados.push(randomNumber);
        }
        else 
        {
            i--;
        }

    }
    let texto = document.getElementsByClassName("texto__paragrafo")[3];
    texto.innerHTML = `Números sorteados: ${numerosSorteados}`;
    console.log(numerosSorteados);
    let botaoReiniciar = document.getElementById("btn-reiniciar")
    botaoReiniciar.setAttribute("disabled", false);
}

