console.log(window.location.href)

const titulo = document.getElementById('titulo-site')

const saudacao = document.querySelector('#boas-vindas')
const fotoPrato1 = document.querySelector('#foto-destaque')
const cardLasanha = document.querySelector('#card-lasanha')

const agora = new Date()
const hora = agora.getHours()
if(hora >=1 && hora <12){
    saudacao.textContent = "Bom Dia!"
}else if(hora>=12 && hora <18 ){
    saudacao.textContent = "Boa tarde!"
}else if(hora>=18 && hora <= 24){
    saudacao.textContent = "Boa noite!"
}else{
    saudacao.textContent = "hora do seu computador esta com erro!"
}


fotoPrato1.alt = "destaque do dia: lasanha Bolonhesa!"

titulo.style.color = "#e67e22"

cardLasanha.classList.add('em-promocao')