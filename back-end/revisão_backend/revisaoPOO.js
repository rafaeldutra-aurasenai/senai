/*
EXERCICIO 1 - CLASSE SIMPLES (PESSOAS)
enunciado:
crie uma classe chamada pessoa que possua 
-nome 
-idade

crie um metodo apresentar que exiba no console o nome da pessoa
*/
// class Pessoa{
//     constructor(nome,idade){
//         this.nome = nome
//         this.idade = idade

//     }
//     apresentar(){
//         console.log(`nome: ${this.nome}, idade: ${this.idade}`)
//     }
// }

// const pessoa1 = new Pessoa("celso",36)
// pessoa1.apresentar()

/*
EXERCICIO 2
crie uma classe produto com:
-nome
-preco

crie um metodo mostrarPreco() que exiba o nome do produto eo seu preço.
*/

// class produto{
//     constructor(nome,preco){
//         this.nome = nome
//         this.preco = preco
//     }
//     mostrarPreco(){
//         console.log(`o produto: ${this.nome} tem o valor de: R$$${this.preco.toFixed(2)}`)  //toFIxed(2) faz mostrar duas casas decimais
//     }
// }

// const produto1 = new produto ("cavalo", 14.30)
// produto1.mostrarPreco()

/*
crie uma classe funcionario com:
-nome
crie uma classe gerente que herda de funcionario e possui:
-setor

crie um metodo que exiba o nome eo setor do gerente
*/

// class funcionario{
//     constructor(nome){
//         this.nome = nome
//     }
// }
// class gerente extends funcionario{
//     constructor (nome,setor){
//         super(nome)
//         this.setor = setor
//     }
//     mostrarDados(){
//         console.log(`funcionario: ${this.nome}, setor: ${this.setor}`)
//     }
// }

// const funcionario1 = new gerente ("marlon","TI")
// funcionario1.mostrarDados()

/* EXERCICIO-4
crie uma classe veiculo com:
-marca
crie uma classe carro que herda de veiculo e possui
-modelo

crie um metodo que exiba marca e o modelo do carro*/

// class veiculo{
//     constructor(marca){
//         this.marca = marca
//     }
// }

// class carro extends veiculo{
//     constructor(marca,modelo){
//         super(marca)
//         this.modelo = modelo
//     }
//     mostrarCarro(){
//         console.log(`marca: ${this.marca} , modelo: ${this.modelo}`)
//     }

// }

// const carro1 = new carro ("fiat","fiat argo")
// carro1.mostrarCarro()

/*
EXERCICIO-5
 enunciado:
 crie uma classe conta onde :
 - saldo seja um atributo privado
 - exista um metodo depositar(valor)
 - exista um metodo mostrar saldo
 */

// class conta {
//   #saldo;
//   constructor() {
//     this.#saldo = 0;
//   }
//   depositar(valor) {
//     if (valor > 0) {
//       this.#saldo += valor;
//     } else {
//       console.log(`valor incorreto!!!!!`);
//     }
//   }

//   mostrarSaldo() {
//     console.log(`Saldo atual: R$${this.#saldo.toFixed(2)}`);
//   }
// }

// const conta1 = new conta();
// conta1.depositar(160);
// conta1.mostrarSaldo();



/* EXERCICIO 6
enunciado:
crie uma classe aluno onde 
- a nota seja um atributo privado
- exista um metodo definirNota(nota)
- exista um metodo mostrarNota()*/

// class aluno{
//     #nota
//     constructor(){
//         this.#nota = 0
//     }
//     definirNota(nota1){
//         if(nota1>=0 && nota1<=10){
//             this.#nota = nota1;
//         }else{
//             console.log(`nota invalida`)
//         }
//     }
//     mostrarNota(){
//         console.log(`nota:${this.#nota.toFixed(1)}`)
//     }
// }

// const aluno1 = new aluno ();
// aluno1.definirNota(10)
// aluno1.mostrarNota()
