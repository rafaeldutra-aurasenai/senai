const tempoAgora = new Date()


const hora = tempoAgora.getHours()


const dataFormatada = tempoAgora.toLocaleDateString('pt-BR')
const horaFormatada = tempoAgora.toLocaleTimeString('pt-BR')


console.log("hoje é dia: " + dataFormatada)
console.log("Horario:" + horaFormatada)

console.log("só a hora:" + hora)