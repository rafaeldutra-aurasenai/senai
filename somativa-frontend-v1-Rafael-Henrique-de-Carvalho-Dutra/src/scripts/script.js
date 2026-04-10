const saudacao = document.querySelector('#saudacao-pizzaria')

const agora = new Date()
const hora = agora.getHours()

if(hora >=1 && hora <12){
    saudacao.textContent = "Bom dia! Pizza no café da manhã?"
}else if(hora>=12 && hora <18 ){
    saudacao.textContent = "Boa tarde! Que tal uma fatia agora?"
}else if(hora>=18 && hora <= 24){
    saudacao.textContent = "Boa noite! A fornalha está quente, faça seu pedido!"
}else{
    saudacao.textContent = "hora do seu computador esta com erro!"
}



const sla= document.querySelector('#banner-promocao')
sla.addEventListener('mouseover',()=>{
    sla.classList.add('fatia-destaque')
})

sla.addEventListener('mouseout',()=>{
    sla.classList.remove('fatia-destaque')
})


const inputQtd= document.querySelector('#qtd-pessoas')
const mudar=document.querySelector("#total-pagar")
inputQtd.addEventListener("input", () => {
const precoRodizio = 45.0;
        const total = Number(inputQtd.value) * precoRodizio;
        mudar.textContent = `R$ ${total.toFixed (2)}`
});





const btn = document.querySelector("#btn-adicionar")
const sabor = document.querySelector("#sabor-pizza")
const lista = document.querySelector("#lista-pedidos")

btn.addEventListener('click', function () {
    if(sabor == ""){
        console.log("erro")

    }else{
        lista.innerHTML+= `Exemplo:<article class="card-pedido"> <h3>🍕 Sabor:${sabor.value} 🛵</h3></article>`

    }
    
    
});