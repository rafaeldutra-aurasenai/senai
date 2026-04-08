const escrita = document.querySelector('.card-acao')
escrita.addEventListener('keyup',()=>{
    escrita.value
})

const caixa= document.querySelector('#caixa-cor')
caixa.addEventListener('mouseover',()=>{
    caixa.style.backgroudColor = 'blue';
})

caixa.addEventListener('mouseout',()=>{
    caixa.style.backgroudColor ='gray';
})