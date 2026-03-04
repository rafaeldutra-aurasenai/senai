const tituloNhoque = document.querySelector('#card-nhoque h3')
// const botoesCompra = document.querySelector('.btn-pedido')
const botoesCompra = document.querySelectorAll('.btn-pedido')

const terceiroCard = document.querySelector('.card:nth-child(3)')

const nomeCompleto = document.querySelector('#nome')

console.log("1. mostrando o titulo NHOQUE (pelo id)", tituloNhoque)

console.log ("2.quantidade de botões de pedido:",botoesCompra.length)

console.log("3. a quarta posicao do class.card", terceiroCard)

const imgLasanha = document.querySelector('img[alt="Lasanha Tech]')
if(tituloNhoque){
    console.log("Titulo CAPTURADO:", tituloNhoque.innerText)
}

const saudacao = document.querySelector('#bem-vindo')

const agora = new Date()
const hora = agora.getHours()

saudacao.textContent = hora < 18 ? "Bem vindo, bom almoço" : "Bem vindo, boa janta"

nomeCompleto.innerHTML ="<strong>Rafael</strong> Henrique de Carvalho Dutra"

const foto = document.querySelector('#foto-destaque')
const caminhoAtual = foto.getAttribute('src')

foto.setAttribute('src','src/img/esgotado.jpg')
foto.setAttribute('alt','prato esgotado!')