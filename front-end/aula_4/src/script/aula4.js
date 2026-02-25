// const tempoAgora = new Date()


// const hora = tempoAgora.getHours()


// const dataFormatada = tempoAgora.toLocaleDateString('pt-BR')
// const horaFormatada = tempoAgora.toLocaleTimeString('pt-BR')


// console.log("hoje é dia: " + dataFormatada)
// console.log("Horario:" + horaFormatada)

// console.log("só a hora:" + hora)

// if(hora>12 && hora<18){
//     alert("Boa tarde!");
// } else if(hora >=18 && hora <6){
//     alert("Boa noite")
// }

// alert("Seja bem-vindo ao TechFood! Aproveite nossos cupons de hoje.");~


class Prato{
    constructor(nome, preco){
        this.nome = nome
        this.preco = preco
    }

    exibirComMoeda(resultado){
        if(resultado){
            return "R$" + resultado.toFixed(2);
        }else{
            return "R$" + this.preco.toFixed(2);
        }
    }

//     exibirComMoeda(total){
//         return "R$" + this.total.toFixed(2)
//     }
 }
 alert("bem vindo ao restaurante sabor e saber ")

const cliente = prompt("para um atendimento personalizado. digite seu nome: ")

let clienteFormatado = cliente.trim().toUpperCase()

alert("bem vindo " +   clienteFormatado +   " ao restaurante sabor e saber")

const lasanha = new Prato("Lasanha Bolonhesa", 45.00)

let qtd = prompt("quantas unidades de: "  +  lasanha.nome + " você deseja?")

let total = lasanha.preco * qtd

alert ("Resumo da simulacao: \n Prato"+ lasanha.nome + "\nTotal:" + lasanha.exibirComMoeda(total))

alert("bem vindo ao restaurante sabor e saber ")

