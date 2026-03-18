// 1. Selecionamos o elemento (Aula 5)
const btn = document.querySelector('.btn-pedido');

// 2. Adicionamos o 'ouvinte' (Evento, Função)
btn.addEventListener('click', function () {
    // LINHA A LINHA: Quando o clique ocorrer, este bloco será executado
    console.log("O vigia detectou um clique no botão!");
    btn.textContent = "Processando...";
});

const inputQtdLasanha = document.querySelector("#qtd-lasanha")

const textoPreco = document.querySelector("#preco-lasanha")

if (inputQtdLasanha && textoPreco) {
    inputQtdLasanha.addEventListener("input", () => {
        const precoUnitario = 45.0
        const total = Number(inputQtdLasanha.value) * precoUnitario
        textoPreco.textContent = `R$ ${total.toFixed(2)}`

        textoPreco.computedStyleMap.color = total > 150 ? "#c0392b" : "#e67e22"
    })
}
///3. adicionando ouvinte 
const massas = document.querySelector("#secao-massas")
massas.addEventListener('click', (event) => {
    const clicado = event.target
    if (clicado.classList.contains('btn-pedido')) {
        console.log("voce clicou em um botao de pedido de MASSA!")
    }
})

//4 evento de clique para todos os botoes 
const botoesPedido = document.querySelectorAll(".btn-pedido")
botoesPedido.forEach((botao) => {
    botao.addEventListener("click", (event) => {
        event.preventDEfault()

        botao.textContent = "pedido enviado"

    })
})