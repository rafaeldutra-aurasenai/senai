
const nome_usuario = document.querySelector('#nome-usuario')

nome_usuario.textContent= "Rafael Henrique de Carvalho Dutra"



const imgperfil = document.querySelector('#foto-perfil')

imgperfil.src= "src/img/teste.jpg"

const card = document.querySelector('#container-perfil')

card.style.backgroundColor = "rgba(135, 211, 94, 0.95)"

const ativo = document.querySelector('.online')

ativo.textContent = " Status: Ativo "


const todasSkills= document.querySelectorAll('.skill');
console.log("Total de skills:", todasSkills.length);